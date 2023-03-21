echo off
set pluginPath=..\..\..\..\..\..\html-bootstrap-editor\dist

rem remove the current link
..\..\..\..\..\..\outils\junction -d dist

rem set the link
..\..\..\..\..\..\outils\junction dist %pluginPath%

pause