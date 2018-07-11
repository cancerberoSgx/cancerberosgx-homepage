import { MenuItem } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as classNames from 'classnames';
import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import { ChangeEvent } from 'react-autosuggest';
import { getProjectsByTagGroup, Project } from './projectMetadata';
import { projects } from './projectData';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { LinkProps, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { history } from '..';
const match = require('autosuggest-highlight/match')
const parse = require('autosuggest-highlight/parse')

const styles = (theme: Theme) => createStyles({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize * 1.4,
    color: theme.palette.primary.main
  },
  'react-autosuggest__container': {
    position: 'relative',
  },
  'react-autosuggest__input': {
    width: 100,
    height: 30,
    padding: '10px 20px',
  },
  'react-autosuggest__suggestions-container': {
    display: 'none',
  },
  'react-autosuggest__suggestions-container--open': {
    display: 'block',
    position: 'absolute',
    top: '51px',
    width: 100,
    border: '1px solid #aaa',
    zIndex: 2,
  },
  'react-autosuggest__suggestion': {
    cursor: 'pointer',
    padding: '10px 20px',
  },
  'react-autosuggest__suggestion--highlighted': {
    backgroundColor: '#ddd'
  },
  'react-autosuggest__section-title': {
    padding: '10px 0 0 10px',
    fontSize: 12,
    color: '#777',
  },
  highlight: {
    fontWeight: 800
  },
  nonhighlight: {
    fontWeight: 300
  },
  menuItem: {
    padding: '0px 6px 0px 6px'
  }
})


class ProjectSearchAutoSuggest extends React.Component<WithStyles<typeof styles> & { mode: 'project' | 'tag'|'projectSectioned'|'tagSectioned' }, { value: string, suggestions: TagSection[] }> {
  constructor(props: WithStyles<typeof styles> & { mode: 'project' | 'tag'|'projectSectioned'|'tagSectioned' }) {
    super(props)
    this.state = {
      value: '',
      suggestions: []
    }
  }
  onChange = (event: ChangeEvent, { newValue, method }: { newValue: string, method: any }) => {
    // console.log('push: '+`/projects/${this.props.mode}/${newValue}`);
    history.push(`/projects/${this.props.mode}/${newValue}`, {some: 'state'})
    this.setState({
      value: newValue
    })
  }
  onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }
  renderSuggestion(suggestion: TagSuggestion, { query, isHighlighted }: { query: string, isHighlighted: boolean }) {
    const { classes, theme } = this.props
    const matches = match(suggestion.name, query)
    const parts: { text: string, highlight: boolean }[] = parse(suggestion.name, matches)
    return (
      <Button component={(props: ButtonProps & LinkProps) => <Link to={`/projects/${this.props.mode}/${suggestion.name}`} {...props} />}>
      <MenuItem selected={isHighlighted}className={classes.menuItem}>
        {parts.map((part, index) => part.highlight ? (
          <span key={String(index)} className={classNames(classes.highlight)}>
            {part.text}
          </span>
        ) : (
            <span key={String(index)} className={classNames(classes.nonhighlight)}>
              {part.text}
            </span>
          )
        )}
      </MenuItem>
      </Button>
    )
  }

  getSuggestions(value: string): TagSection[] {

    const projectByTt = getProjectsByTagGroup() as any
    const escapedValue = escapeRegexCharacters(value.trim())
    if (escapedValue === '') {
      return []
    }
    const sections: TagSection[] = []
    if(this.props.mode==='project') {
      const matchProjects = projects.filter((p: Project) => p.name.includes(escapedValue))
      if(matchProjects.length){
        sections.push({ title: 'Al Projects', projects: matchProjects })
      }
      else {
        sections.push({ title: `No projects match for "${escapedValue}"` , projects: [] })
      }
    }

    else if(this.props.mode==='tag'){
      Object.keys(projectByTt).forEach(tagType => {
            const matchingTags = Object.keys(projectByTt[tagType]).filter(t=>t.includes(escapedValue)).map(t=>({name: t}))
            if(matchingTags.length){
              sections.push({ title: tagType , projects: matchingTags })
            }
            else {
              sections.push({ title: `No tags match for "${escapedValue}"` , projects: [] })
            }
      })
    }
    return sections
  }
  render() {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange,
      newValue: ''
    }
    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions as any}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion.bind(this)}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        renderSuggestionsContainer={renderSuggestionsContainer}
        inputProps={inputProps as any} />
    )
  }
}

export default withStyles(styles, { withTheme: true })(ProjectSearchAutoSuggest)


interface TagSuggestion {
  name: string,
}
interface TagSection {
  title: string,
  projects: TagSuggestion[]
}


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
function getSuggestionValue(suggestion: TagSuggestion) {
  return suggestion.name
}
function renderSectionTitle(section: TagSection) {
  return (
    <strong>{section.title}</strong>
  )
}
function getSectionSuggestions(section: TagSection) {
  return section.projects
}
function renderSuggestionsContainer(options: { containerProps: any, children: any }) {
  const { containerProps, children } = options
  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}