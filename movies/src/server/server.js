import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import { Provider } from 'react-redux'
import configureStore from './modules/configureStore';


function renderHTML(html) {
    return `
        <!doctype html>
        <html>
          <head>
            <meta charset=utf-8>
            <title>React Server Side Rendering</title>
          </head>
          <body>
            <div id="root">${html}</div>
            <script src="/js/main.js"></script>
          </body>
        </html>
    `;
  }

  export default function serverRenderer() {
    return (req, res) => {
      const htmlString = renderToString(<div>test</div>);
  
      res.send(renderHTML(htmlString));
    };
  }