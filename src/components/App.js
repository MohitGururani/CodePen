// App.js

import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  // State variables for HTML, CSS, and JS code
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');

  // State variable for the combined code to be displayed in the preview pane
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    // Update the combined code with HTML, CSS, and JS after a short delay
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        {/* Editor for HTML code */}
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        {/* Editor for CSS code */}
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        {/* Editor for JavaScript code */}
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        {/* Preview pane */}
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
