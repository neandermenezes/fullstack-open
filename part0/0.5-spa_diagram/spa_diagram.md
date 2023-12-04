browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server->>browser: HTML document

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server->>browser: CSS file

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server->>browser: JS file

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server->>browser: JSON content
