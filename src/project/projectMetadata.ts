import { projects } from './projectData';

export enum experticeArea {
  parser = "parser", documentation = "documentation", editorsAndIDEs = 'editorsAndIDEs', pluginsAndExtensibility = 'pluginsAndExtensibility', stringManipulation = 'stringManipulation', utilities = 'utilities', devtools = 'devtools', instrumentation = 'instrumentation', testing = "testing", APIdesign = 'APIdesign', designPatterns = 'designPatterns'
}
export enum language {
  JavaScript = "JavaScript", TypeScript = "TypeScript", Java = 'Java', bash = 'bash', html = 'html', css = 'css'
}
export enum runtime {
  TypeScriptLanguageService = 'TypeScriptTypeScriptLanguageService', browser = "browser", NodeJs = "NodeJs", jvm = "jvm", vscode = "vscode"
}
export enum libraries {
  TypeScript = 'TypeScript', angular = 'angular', react = 'react', express = 'express', esprima = 'esprima', grunt = 'grunt', browserify = 'browserify', monacoEditor = 'monacoEditor', bootstrap = 'bootstrap', lerna = 'lerna', yarn = 'yarn', shelljs = 'shelljs', jsdoc = 'jsdoc', eslint = "eslint", prettier = "prettier"
}
export enum projectCharacteristic {
  smallSize = 'Small Size', mediumSize = 'Medium Size', bigSize = 'Big Size', bigComplexity = 'Complex', smallComplexity = 'Simple', goodQuality = 'Good Quality', poorQuality = 'Poor Quality', mediumQuality = 'Medium Quality', useful = "Useful", useless = "Useless", moreOrLessUseful = "More or less Useful", research = "Research", mediumComplexity = 'Somewhat complex', library = 'Library', commandLineInterface = 'Command Line Interface', game = 'Game'
}
export type allTags = experticeArea & language & runtime & libraries & projectCharacteristic

export enum tagType {
  projectCharacteristic = 'Project Characteristic', experticeArea = 'Expertice Area', language = 'Programming Language', runtime = 'Runtime', lib = 'Libraries used'
}
export const tagTypeMap = {
  projectCharacteristic: projectCharacteristic, experticeArea: experticeArea, language: language, runtime: runtime, libraries: libraries
}

export interface Project {
  name: string
  description: string
  repositoryUrl: string
  projectPage?: string
  language: language[]
  runtime: runtime[]
  libraries: libraries[]
  experticeArea: experticeArea[],
  projectCharacteristic: projectCharacteristic[]
}

let projectByTagGroup: { [key in tagType]: { [key in allTags]: Project[] } }
export function getProjectsByTagGroup(): { [key in tagType]: { [key in allTags]: Project[] } } {
  if (projectByTagGroup) {
    return projectByTagGroup
  }
  const result = {} as any
  for (let tt in tagType) {
    result[tt] = result[tt] || {}
    for (let tag in (tagTypeMap as any)[tt]) {
      // console.log(tt, tag);
      
      result[tt][tag] = (projects as any[]).filter(p => {if(!p[tt]){debugger} return p[tt].includes(tag)})
    }
  } projectByTagGroup = result
  return result
}

// const projectCharacteristicNameMap: {[key: string]: string} = {
//   smallSize: 'Small size', 
//   commandLineInterface: 'Command Line Interface'
// }
// export function getProjectCharacteristicName(value: string): string{
//   return value//projectCharacteristicNameMap[value]
// }

