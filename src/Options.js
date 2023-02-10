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

import packageJson from "../package.json";

export class Options
{
    static appName(){ return packageJson.description; }
    
    static appVersion(){ return packageJson.version; }

    static homepage(){ 
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            return "http://localhost:3000";
        } 
        else {
            return packageJson.homepage;
        }
    }
    
    static appTitle(){
        return this.appName() + " | v" + this.appVersion();
    }

    static versionHistory = [
        {version: "0.0.1", description: "", timestamp: '2019-10-17'}
    ]
}