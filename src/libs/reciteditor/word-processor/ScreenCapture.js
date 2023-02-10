// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */

import React, { Component, Fragment } from 'react';
import html2canvas from 'html2canvas';

export class ScreenCapture extends Component {
	static defaultProps = {
		onStartCapture: () => null,
		onEndCapture: () => null
	}

	state = {
		on: false,
		startX: 0,
		startY: 0,
		endX: 0,
		endY: 0,
		crossHairsTop: 0,
		crossHairsLeft: 0,
		isMouseDown: false,
		windowWidth: 0,
		windowHeight: 0,
		borderWidth: 0,
		cropPositionTop: 0,
		cropPositionLeft: 0,
		cropWidth: 0,
		cropHeigth: 0,
		imageURL: ''
	}

	componentDidMount = () => {
		this.handleWindowResize()
		window.addEventListener('resize', this.handleWindowResize)
		window.addEventListener('mousemove', this.handleMouseMove)
		window.addEventListener('mouseup', this.handleMouseUp)
		window.addEventListener('mousedown', this.handleMouseDown)
	}

	componentWillUnmount = () => {
		window.removeEventListener('resize', this.handleWindowResize)
		window.removeEventListener('mousemove', this.handleMouseMove)
		window.removeEventListener('mouseup', this.handleMouseUp)
		window.removeEventListener('mousedown', this.handleMouseDown)
	}

	handleWindowResize = () => {
		const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		this.setState({
			windowWidth,
			windowHeight
		})
	}

	handStartCapture = () => this.setState({ on: true })

	handleMouseMove = (e) => {
		const { isMouseDown, windowWidth, windowHeight, startX, startY, borderWidth } = this.state

		let cropPositionTop = startY
		let cropPositionLeft = startX
		const endX = e.clientX
		const endY = e.clientY
		const isStartTop = endY >= startY
		const isStartBottom = endY <= startY
		const isStartLeft = endX >= startX
		const isStartRight = endX <= startX
		const isStartTopLeft = isStartTop && isStartLeft
		const isStartTopRight = isStartTop && isStartRight
		const isStartBottomLeft = isStartBottom && isStartLeft
		const isStartBottomRight = isStartBottom && isStartRight
		let newBorderWidth = borderWidth
		let cropWidth = 0
		let cropHeigth = 0

		if (isMouseDown) {
			if (isStartTopLeft) {
				newBorderWidth = `${startY}px ${windowWidth - endX}px ${windowHeight - endY}px ${startX}px`
				cropWidth = endX - startX
				cropHeigth = endY - startY
			}

			if (isStartTopRight) {
				newBorderWidth = `${startY}px ${windowWidth - startX}px ${windowHeight - endY}px ${endX}px`
				cropWidth = startX - endX
				cropHeigth = endY - startY
				cropPositionLeft = endX
			}

			if (isStartBottomLeft) {
				newBorderWidth = `${endY}px ${windowWidth - endX}px ${windowHeight - startY}px ${startX}px`
				cropWidth = endX - startX
				cropHeigth = startY - endY
				cropPositionTop = endY
			}

			if (isStartBottomRight) {
				newBorderWidth = `${endY}px ${windowWidth - startX}px ${windowHeight - startY}px ${endX}px`
				cropWidth = startX - endX
				cropHeigth = startY - endY
				cropPositionLeft = endX
				cropPositionTop = endY
			}
		}

		this.setState({
			crossHairsLeft: e.clientX,
			crossHairsTop: e.clientY,
			borderWidth: newBorderWidth,
			cropWidth,
			cropHeigth,
			cropPositionTop: cropPositionTop,
			cropPositionLeft: cropPositionLeft
		})
	}

	handleMouseDown = (e) => {
		if (!this.state.on) return;
		const startX = e.clientX
		const startY = e.clientY

		this.setState((prevState) => ({
			startX,
			startY,
			cropPositionTop: startY,
			cropPositionLeft: startX,
			isMouseDown: true,
			borderWidth: `${prevState.windowWidth}px ${prevState.windowHeight}px`
		}))
	}

	handleMouseUp = (e) => {
		if (!this.state.on) return;
		this.handleClickTakeScreenShot()
		this.setState({
			on: false,
			isMouseDown: false,
			borderWidth: 0
		})
	}

	handleClickTakeScreenShot = () => {
		const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = this.state
		const body = document.querySelector('body')

		html2canvas(body).then(canvas => {
			let croppedCanvas = document.createElement('canvas')
			let croppedCanvasContext = croppedCanvas.getContext('2d')

			croppedCanvas.width = cropWidth;
			croppedCanvas.height = cropHeigth;

			croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop, cropWidth, cropHeigth, 0, 0, cropWidth, cropHeigth);

			this.props.onEndCapture(croppedCanvas.toDataURL())
		});
	}

	renderChild = () => {
		const children = this.props.children;

		const props = {
			onStartCapture: this.handStartCapture
		}

		if (typeof children === 'function') return children(props)
		return children
	}

	render() {

		if (!this.state.on) return this.renderChild()

		return (
			<div>
				{this.renderChild()}
				<div
					className={`overlay ${this.state.isMouseDown && 'highlighting'}`}
					style={{ borderWidth: this.state.borderWidth }}
				/>
				<div
					className="crosshairs"
					style={{ left: this.state.crossHairsLeft + 'px', top: this.state.crossHairsTop + 'px', position: 'fixed' }}
				/>
			</div>
		)
	}
}
