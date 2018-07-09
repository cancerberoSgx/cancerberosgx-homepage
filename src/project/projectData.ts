import { lightBaseTheme } from 'material-ui/styles';
import { Project, language, runtime, libraries, experticeArea, projectCharacteristic } from './projectMetadata';


export const projects: Project[] = [
  {
    "name": "short-jsdoc",
    "description": "jsdoc implementation with flexible and shorter syntax, written from scratch, with emphasis in rich type support",
    "repositoryUrl": "https://github.com/cancerberoSgx/short-jsdoc",
    "projectPage": "http://cancerberosgx.github.io/short-jsdoc/doc/guide/",
    "language": [language.JavaScript],
    "runtime": [runtime.NodeJs, runtime.browser],
    "libraries": [libraries.esprima, libraries.grunt, libraries.browserify, libraries.lerna],
    "experticeArea": [experticeArea.parser, experticeArea.documentation],
    projectCharacteristic: [projectCharacteristic.bigSize, projectCharacteristic.bigComplexity, projectCharacteristic.useful, projectCharacteristic.goodQuality],
  },

  {
    "name": "typescript-plugins-of-mine",
    "description": "Research, documentation and finally useful TypeScript Language Service plugins for coe refactoring working on several IDEs / Editors like vscode, sublime and Atom that are very common in other typed languages and IDEs like Java / Eclipse. Include several plugins, utilities, documentation, and even atom and vscode editor extensions",
    "repositoryUrl": "https://github.com/cancerberoSgx/typescript-plugins-of-mine/",
    "language": [language.TypeScript, language.JavaScript],
    "runtime": [runtime.TypeScriptLanguageService, runtime.NodeJs],
    "libraries": [libraries.angular, libraries.grunt, libraries.browserify],
    "experticeArea": [
      experticeArea.parser, experticeArea.editorsAndIDEs, experticeArea.pluginsAndExtensibility, experticeArea.devtools, experticeArea.APIdesign, experticeArea.utilities
    ],
    projectCharacteristic: [projectCharacteristic.bigSize, projectCharacteristic.bigComplexity, projectCharacteristic.mediumQuality, projectCharacteristic.library, projectCharacteristic.useful]
  },

  {
    "name": "cli-driver",
    "description": "Like WebDriver but for the command line",
    "repositoryUrl": "https://github.com/cancerberoSgx/short-jsdoc",
    "projectPage": "http://cancerberosgx.github.io/short-jsdoc/doc/guide/",
    "language": [language.TypeScript],
    "runtime": [runtime.NodeJs],
    "libraries": [libraries.lerna],
    "experticeArea": [
      experticeArea.testing
    ],
    projectCharacteristic: [projectCharacteristic.bigSize, projectCharacteristic.bigComplexity, projectCharacteristic.useful, projectCharacteristic.goodQuality, projectCharacteristic.commandLineInterface],
  },

  {
    "name": "plugin-container",
    "description": "Plugin-container is a design pattern similar to Observer, but with ore emphasis on data processing, state change, and cancelable actions. Very useful and simple pattern to add extension points to your APIs or frameworks",
    "repositoryUrl": "https://github.com/cancerberoSgx/plugin-container",
    "language": [language.TypeScript],
    "runtime": [runtime.NodeJs, runtime.browser],
    "libraries": [],
    "experticeArea": [
      experticeArea.APIdesign, experticeArea.designPatterns
    ],
    projectCharacteristic: [projectCharacteristic.smallSize, projectCharacteristic.mediumComplexity, projectCharacteristic.useful, projectCharacteristic.goodQuality, projectCharacteristic.library],
  },

  {
    "name": "perplexed-wars",
    "description": "Framework to build tower-defense-like game but where you decide if attack or defend. ",
    "repositoryUrl": " https://github.com/cancerberoSgx/perplexed-wars",
    projectPage: 'https://cancerberosgx.github.io/perplexed-wars/build/',
    "language": [language.TypeScript, language.html, language.css],
    "runtime": [runtime.browser],
    "libraries": [libraries.react],
    "experticeArea": [
      experticeArea.APIdesign, experticeArea.designPatterns
    ],
    projectCharacteristic: [projectCharacteristic.bigSize, projectCharacteristic.bigComplexity, projectCharacteristic.moreOrLessUseful, projectCharacteristic.mediumQuality, projectCharacteristic.library, projectCharacteristic.game],
  },

 


  {
    "name": "typescript-api-playground",
    "description": "Play with TypeScript compiler (and others) APIs online. Learn by exploring a rich example gallery. Online playground and easy to setup locally.",
    "projectPage": "https://typescript-api-playground.glitch.me/",
    "repositoryUrl": "https://github.com/cancerberoSgx/typescript-plugins-of-mine/",
    "language": [language.TypeScript, language.html, language.css],
    "runtime": [runtime.browser, runtime.NodeJs, runtime.TypeScriptLanguageService],
    "libraries": [libraries.TypeScript, libraries.monacoEditor, libraries.bootstrap],
    "experticeArea": [
      experticeArea.parser, experticeArea.editorsAndIDEs, experticeArea.pluginsAndExtensibility, experticeArea.documentation
    ],
    projectCharacteristic: [projectCharacteristic.mediumSize, projectCharacteristic.bigComplexity, projectCharacteristic.mediumQuality]
  },



  {
    "name": "yamat",
    "description": "yamat: yet another monorepo administration tool. Tired of the complexity of lerna, rush or yarn workspaces ? This tool solves the problem of mono repos (and only that problem) with a very straightforward solution",
    "repositoryUrl": "https://github.com/cancerberoSgx/yamat",
    "language": [language.TypeScript],
    "runtime": [runtime.NodeJs],
    "libraries": [libraries.shelljs],
    "experticeArea": [
      experticeArea.devtools
    ],
    projectCharacteristic: [projectCharacteristic.mediumSize, projectCharacteristic.mediumComplexity, projectCharacteristic.useful, projectCharacteristic.goodQuality],
  },
  
  {
    "name": "hrtime-now",
    "description": "Friendly API for process.hrtime with some high level - date-pretty format utilities. Ideal to measure how long it take to run a function /fragment of code.",
    "repositoryUrl": "https://github.com/cancerberoSgx/hrtime-now",
    "language": [language.TypeScript],
    "runtime": [runtime.NodeJs],
    "libraries": [],
    "experticeArea": [
      experticeArea.APIdesign
    ],
    projectCharacteristic: [projectCharacteristic.smallSize, projectCharacteristic.smallComplexity, projectCharacteristic.useful, projectCharacteristic.goodQuality, projectCharacteristic.library],
  },

  {
    "name": "hyperquest-promise",
    "description": "hyperquest returning promises - flexible request library supporting node.js and browser with the same API based on Promises",
    "repositoryUrl": "https://github.com/cancerberoSgx/hyperquest-promise",
    "language": [language.TypeScript],
    "runtime": [runtime.NodeJs, runtime.browser],
    "libraries": [],
    "experticeArea": [
      experticeArea.APIdesign
    ],
    projectCharacteristic: [projectCharacteristic.smallSize, projectCharacteristic.smallComplexity, projectCharacteristic.useful, projectCharacteristic.goodQuality, projectCharacteristic.library],
  },
  

  {
    "name": "jsdoc-templates-demo",
    "description": "The idea of this project is to generate a list of output of several well-known jsdoc templates so we can preview them all using the same sample JavaScript sample project",
    "repositoryUrl": "https://github.com/cancerberoSgx/jsdoc-templates-demo",
    "projectPage": "https://cancerberosgx.github.io/jsdoc-templates-demo/demo/",
    "language": [language.JavaScript, language.bash],
    "runtime": [runtime.NodeJs, runtime.browser],
    "libraries": [libraries.jsdoc],
    "experticeArea": [experticeArea.documentation, experticeArea.devtools],
    "projectCharacteristic": [projectCharacteristic.mediumSize, projectCharacteristic.smallComplexity, projectCharacteristic.poorQuality]
  },

  {
    "name": "prettier-eslint-gallery",
    "description": "JavaScript code formatter based on eslint and prettier. Also a gallery of code formatted with popular eslint-config styleguides to see how they look like",
    "repositoryUrl": "https://github.com/cancerberoSgx/prettier-eslint-gallery",
    "projectPage": "https://cancerberosgx.github.io/prettier-eslint-gallery/gallery/",
    "language": [language.JavaScript, language.html, language.css],
    "runtime": [runtime.NodeJs],
    "libraries": [libraries.eslint, libraries.prettier],
    "experticeArea": [experticeArea.documentation, experticeArea.devtools, experticeArea.APIdesign, experticeArea.pluginsAndExtensibility, experticeArea.utilities],
    "projectCharacteristic": [projectCharacteristic.mediumSize, projectCharacteristic.mediumComplexity, projectCharacteristic.mediumQuality]
  },

  

  {
    "name": "fs-to-json",
    "description": "Pack folder into a JSON file. Supports input globs. Ideally to embed files at compile time in your single page application",
    "repositoryUrl": "https://github.com/cancerberoSgx/fs-to-json",
    "language": [language.JavaScript],
    "runtime": [runtime.NodeJs],
    "libraries": [],
    "experticeArea": [experticeArea.devtools],
    projectCharacteristic: [projectCharacteristic.smallSize, projectCharacteristic.smallComplexity, projectCharacteristic.goodQuality]
  },
  {
    "name": "br-fs-to-json",
    "description": "Browserify transformation for suporting fs-to-json.",
    "repositoryUrl": "https://github.com/cancerberoSgx/fs-to-json",
    "language": [language.JavaScript],
    "runtime": [runtime.NodeJs, runtime.browser],
    "libraries": [],
    "experticeArea": [experticeArea.documentation, experticeArea.devtools],
    projectCharacteristic: [projectCharacteristic.mediumSize, projectCharacteristic.smallComplexity, projectCharacteristic.poorQuality]
  },



  {
    "name": "string-utilities",
    "description": "HTML application that contains string operations related utilities, in general, useful to developers. At the beggining this project was a pet for learning some technologies new, concretely angular. But now I think it's really useful when you need to escape, quote, parse, indent, encrypt, encode, etc strings online. ",
    "repositoryUrl": "https://github.com/cancerberoSgx/string-utilities/",
    "projectPage": "http://cancerberosgx.github.io/string-utilities/",
    "language": [language.JavaScript],
    "runtime": [runtime.browser],
    "libraries": [libraries.angular, libraries.grunt, libraries.browserify],
    "experticeArea": [
      experticeArea.stringManipulation, experticeArea.utilities,
    ],
    projectCharacteristic: [projectCharacteristic.mediumSize, projectCharacteristic.smallComplexity, projectCharacteristic.mediumQuality]
  }

]

/*
TODO: 
https://github.com/cancerberoSgx/engify
https://github.com/cancerberoSgx/diff-editor
https://github.com/cancerberoSgx/raphael4gwt
https://github.com/cancerberoSgx/prettier-eslint-gallery-vscode-extension
https://github.com/cancerberoSgx/embed-json-in-ts
https://github.com/cancerberoSgx/generator-suitescript2-typescript
https://github.com/cancerberoSgx/netsuite-role-inquirer
https://github.com/cancerberoSgx/webpagetest-inquirer
https://github.com/cancerberoSgx/jsdoc-typeof-plugin
https://github.com/cancerberoSgx/typedoc-plugins-of-mine
https://github.com/cancerberoSgx/javascript-documentation-examples
https://github.com/cancerberoSgx/vscode-typescript-outline-view
https://github.com/cancerberoSgx/folder-drop-manager
https://github.com/cancerberoSgx/minify-fast
https://github.com/cancerberoSgx/js-ast-experiments-of-mine
https://github.com/cancerberoSgx/typescript-in-the-browser
https://github.com/cancerberoSgx/javascript-sample-projects
https://github.com/cancerberoSgx/my-first-java-projects

https://github.com/cancerberoSgx/desktop-media-tools
https://github.com/cancerberoSgx/PictureMakeup

https://github.com/cancerberoSgx/raphaeljs-tutorial
https://github.com/cancerberoSgx/raphaelmarkup
https://github.com/cancerberoSgx/gwtmauve
https://github.com/cancerberoSgx/js-indentator
https://github.com/cancerberoSgx/docker-sysbench
https://github.com/cancerberoSgx/momentgwt
https://github.com/cancerberoSgx/sgxRaphaelJsPlugins

https://github.com/cancerberoSgx/generatrivia
https://github.com/cancerberoSgx/raphael-contrib-patheditor
https://github.com/cancerberoSgx/js-indentator
*/