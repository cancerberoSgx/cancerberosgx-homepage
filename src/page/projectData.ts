
export enum tag {
  JavaScript = "JavaScript", parser = "parser", documentation = "documentation"
}
export enum language {
  JavaScript = "JavaScript", TypeScript = "TypeScript", Java = 'Java'
}
export enum runtime {
  browser = "browser", NodeJs = "NodeJs", jvm = "jvm", vscode = "vscode"
}
export interface Project {
  name: string
  description: string
  repositoryUrl: string
  projectPage: string
  language: language[]
  runtime: runtime[]
  tags: tag[]
}

export const projects: Project[] = [
  {
    "name": "short-jsdoc",
    "description": "jsdoc implementation with flexible and shorter syntax, written from scratch, with emphasis in rich type support",
    "repositoryUrl": "https://github.com/cancerberoSgx/short-jsdoc",
    "projectPage": "http://cancerberosgx.github.io/short-jsdoc/doc/guide/",
    "language": [language.JavaScript],
    "runtime": [runtime.NodeJs, runtime.browser],
    "tags": [
      tag.JavaScript, tag.parser, tag.documentation
    ]
  }
]