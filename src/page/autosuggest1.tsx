import { MenuItem } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as classNames from 'classnames';
import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import { ChangeEvent } from 'react-autosuggest';
const match = require('autosuggest-highlight/match');
const parse = require('autosuggest-highlight/parse');

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
    width: 240,
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
    width: '280px',
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
    fontWeight: 500
  },
  nonhighlight: {
    fontWeight: 300
  }
});



const languages = [
  {
    title: '1970s',
    languages: [
      {
        name: 'C',
        year: 1972
      }
    ]
  },
  {
    title: '1980s',
    languages: [
      {
        name: 'C++',
        year: 1983
      },
      {
        name: 'Perl',
        year: 1987
      }
    ]
  },
  {
    title: '1990s',
    languages: [
      {
        name: 'Haskell',
        year: 1990
      },
      {
        name: 'Python',
        year: 1991
      },
      {
        name: 'Java',
        year: 1995
      },
      {
        name: 'Javascript',
        year: 1995
      },
      {
        name: 'PHP',
        year: 1995
      },
      {
        name: 'Ruby',
        year: 1995
      }
    ]
  },
  {
    title: '2000s',
    languages: [
      {
        name: 'C#',
        year: 2000
      },
      {
        name: 'Scala',
        year: 2003
      },
      {
        name: 'Clojure',
        year: 2007
      },
      {
        name: 'Go',
        year: 2009
      }
    ]
  },
  {
    title: '2010s',
    languages: [
      {
        name: 'Elm',
        year: 2012
      }
    ]
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value: string): Section[] {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages
    .map(section => {
      return {
        title: section.title,
        languages: section.languages.filter(language => regex.test(language.name))
      };
    })
    .filter(section => section.languages.length > 0);
}


function getSuggestionValue(suggestion: Suggestion) {
  return suggestion.name;
}


function renderSectionTitle(section: Section) {
  return (
    <strong>{section.title}</strong>
  );
}

function getSectionSuggestions(section: Section) {
  return section.languages;
}

function renderSuggestionsContainer(options: { containerProps: any, children: any }) {
  const { containerProps, children } = options;
  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}


class Auto1 extends React.Component<WithStyles<typeof styles>, { value: string, suggestions: Section[] }> {
  constructor(props: WithStyles<typeof styles>) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    }
  }

  onChange = (event: ChangeEvent, { newValue, method }: { newValue: string, method: any }) => {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  renderSuggestion(suggestion: Suggestion, { query, isHighlighted }: { query: string, isHighlighted: boolean }) {
    const { classes, theme } = this.props;
    const matches = match(suggestion.name, query)
    const parts: { text: string, highlight: boolean }[] = parse(suggestion.name, matches)
    return (
      <MenuItem selected={isHighlighted}>
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
    )
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
    );
  }
}

// ReactDOM.render(<Auto1 />, document.getElementById('app'));
export default withStyles(styles, { withTheme: true })(Auto1)


interface Suggestion { name: string, year: number }
interface Section { title: string, languages: Suggestion[] }