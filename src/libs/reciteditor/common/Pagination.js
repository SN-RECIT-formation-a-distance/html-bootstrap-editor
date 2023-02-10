import React, { Component } from 'react';
import { Pagination as Pagination2 } from 'react-bootstrap';

export class Pagination extends Component {
    static defaultProps = {
        onChangePage: null,
        pagination: null
    };
      
    constructor(props){
        super(props);
    }

    renderPagination(){
        let pagination = [];
        let count = this.props.pagination.count;
        let pageCount = Math.ceil(count / this.props.pagination.item_per_page);
        if (pageCount > 1){
            pagination.push(<Pagination2.First key="first" disabled={this.props.pagination.current_page == 1} onClick={() => this.props.onChangePage(1)} />);
            pagination.push(<Pagination2.Prev key="prev" disabled={this.props.pagination.current_page == 1} onClick={() => this.props.onChangePage(this.props.pagination.current_page-1)}/>);
            if (pageCount < 10){
                for (let p = 1; p <= pageCount; p++){
                    this.pushPage(p, pagination);
                }
            }else{
                let p = this.props.pagination.current_page
                if (p > 1){
                    if (p-1 > 1){
                        this.pushPage(1, pagination);
                    }
                    if (p-2 > 1){
                        pagination.push(<Pagination2.Ellipsis key={"el"+p} />);
                    }
                    this.pushPage(p-1, pagination);
                }
                this.pushPage(p, pagination);
                if (p < pageCount){
                    this.pushPage(p+1, pagination);
                    if (p+1 < pageCount){
                        pagination.push(<Pagination2.Ellipsis key={"elend"+p} />);
                    }
                    if (p+2 < pageCount){
                        this.pushPage(pageCount, pagination);
                    }
                }
            }
            pagination.push(<Pagination2.Next key="next" disabled={this.props.pagination.current_page == pageCount} onClick={() => this.props.onChangePage(this.props.pagination.current_page+1)}/>);
            pagination.push(<Pagination2.Last key="last" disabled={this.props.pagination.current_page == pageCount} onClick={() => this.props.onChangePage(pageCount)}/>);
        }
        return pagination;
    }

    pushPage(p, pagination){
        pagination.push(<Pagination2.Item key={p} onClick={() => this.props.onChangePage(p)} active={this.props.pagination.current_page == p}>{p}</Pagination2.Item>)
    }

    render() {       
        let main = <Pagination2 style={{display:'flex',justifyContent:'center'}}>{this.renderPagination()}</Pagination2>
        return (main);
    }
}
