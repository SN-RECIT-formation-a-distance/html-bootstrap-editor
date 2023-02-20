# htmlbootstrapeditor (React component)

The HTML Bootstrap editor allows you to create a much more attractive and responsive layout. It is based on the Bootstrap 4 framework and its drag-and-drop usage makes it easy to integrate content into Moodle. It offers a wide range of elements (text, image, Youtube video, embed elements, etc.) commonly used today. This editor meets the first level of accessibility standards and ensures a consistent presentation of content, regardless of the type of device used: computer, tablet or smartphone.

# Dependencies
* Bootstrap 4.6
* jQuery
* FontAwesome

## Showcase
https://github.com/SN-RECIT-formation-a-distance/html-bootstrap-editor-showcase

## Pixabay API
To make the Pixabay feature available inside the editor, the administrator must:
1. Create a Pixabay account, which will generate an API key automatically
2. Copy the generated API key in the 'Parameters' section on this page: https://pixabay.com/api/docs/
3. Assign the setting **pixabaykey** to the getSetting object.

## Implement IWrapper
In order for the editor to work, an interface needs to be implemented. You can see an example here: https://github.com/SN-RECIT-formation-a-distance/html-bootstrap-editor/blob/main/src/test/test.js