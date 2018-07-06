import { lightBaseTheme } from 'material-ui/styles';

export enum tag {
  JavaScript = "JavaScript", parser = "parser", documentation = "documentation"
}
export enum language {
  JavaScript = "JavaScript", TypeScript = "TypeScript", Java = 'Java'
}
export enum runtime {
  browser = "browser", NodeJs = "NodeJs", jvm = "jvm", vscode = "vscode"
}
export enum lib {
  angular = 'angular', react = 'react', express = 'express', esprima = 'esprima', grunt = 'grunt', browserify = 'browserify'
}
export interface Project {
  name: string
  description: string
  repositoryUrl: string
  projectPage: string
  language: language[]
  runtime: runtime[]
  libraries: lib[]
  area: tag[]
}

export const projects: Project[] = [
  {
    "name": "short-jsdoc",
    "description": "jsdoc implementation with flexible and shorter syntax, written from scratch, with emphasis in rich type support",
    "repositoryUrl": "https://github.com/cancerberoSgx/short-jsdoc",
    "projectPage": "http://cancerberosgx.github.io/short-jsdoc/doc/guide/",
    "language": [language.JavaScript],
    "runtime": [runtime.NodeJs, runtime.browser],
    "libraries": [lib.esprima, lib.grunt, lib.browserify],
    "area": [
      tag.JavaScript, tag.parser, tag.documentation
    ]
  },
  {
    "name": "string-utilities",
    "description": "HTML application that contains string operations related utilities, in general, useful to developers. At the beggining this project was a pet for learning some technologies new, concretely angular. But now I think it's really useful when you need to escape, quote, parse, indent, encrypt, encode, etc strings online. ",
    "repositoryUrl": "https://github.com/cancerberoSgx/string-utilities/",
    "projectPage": "http://cancerberosgx.github.io/string-utilities/",
    "language": [language.JavaScript],
    "runtime": [runtime.browser],
    "libraries": [lib.angular, lib.grunt, lib.browserify],
    "area": [
      tag.JavaScript, tag.parser, tag.documentation
    ]
  }
]