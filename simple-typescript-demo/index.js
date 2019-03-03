// This file: index.js
// Run this file from the VSCode Launcher

// https://babeljs.io/docs/en/usage
// 1. npm install --save-dev @babel/core @babel/preset-typescript

// Import the node module.
const babel = require("@babel/core");

// Example of some typescript code.
let code = "const x: number = 0;";

// Provide the transform options, in particular the typescript plugin. 
let options = {
    plugins: ["@babel/plugin-transform-typescript"]
};

// Run the babel transform with typescript plugin. 
let transformed = babel.transform(code, options);

// Output the typescript in Javascript. 
console.log('Completed transformation: ', transformed.code); 
// Outputs: $ Completed transformation:  const x = 0;