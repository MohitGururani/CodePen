# CodePen Clone
This is a CodePen clone built using React. It allows you to write and preview HTML, CSS, and JavaScript code in real-time. You can make changes to the code in the editor panes and see the output instantly in the preview pane.

# Features
- Three editor panes for HTML, CSS, and JavaScript code.

- Real-time preview of the code output.

- Automatic synchronization of code with local storage, so your code is saved even if you refresh the page.

- Expand/collapse functionality for each editor pane.

- Syntax highlighting and code linting using CodeMirror library.

# Getting Started
To run the CodePen clone locally, follow these steps:

1.Clone the repository to your local machine.

2.Install the dependencies by running npm install in the project directory.

3.Start the development server with npm start.

4.Open your browser and visit http://localhost:3000 to see the application.

# File Structure
App.js: The main component that renders the editor panes and the preview pane. It uses the useLocalStorage hook to synchronize code with local storage.

Editor.js: A reusable component that represents an individual editor pane. It uses the ControlledEditor component from react-codemirror2 to provide code editing functionality.

useLocalStorage.js: A custom hook that handles reading from and writing to local storage.

Feel free to modify and customize the code as per your requirements.

# Acknowledgments
This project is inspired by CodePen (https://codepen.io), a popular online code editor and playground.




