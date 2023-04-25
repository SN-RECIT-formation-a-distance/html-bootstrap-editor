rem The purpose of this file is to make programming the lib and Moodle easier. This way, the lib will be compiled and at the same time, the tool_htmlbootstrapeditor plugin will be able to get the compiled files.
rem This file will be located in the @plugin@/react/node_modules/@recit/html-bootstrap-editor folder
rem It will create a link from @plugin@/react/.../dist to the lib folder /html-bootstrap-editor/dist

echo off
set pluginPath=..\..\..\..\..\..\html-bootstrap-editor\dist

rem remove the dist folder
rmdir dist

rem remove the current link
..\..\..\..\..\..\outils\junction -d dist

rem set the link
..\..\..\..\..\..\outils\junction dist %pluginPath%

pause