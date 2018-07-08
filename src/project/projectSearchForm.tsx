import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardContent, Typography, CardActions, Button, Card, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { projects } from '../project/projectData';
import Project from '../project/project'
import * as classNames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  SearchAutoSuggest from '../project/projectSearchAutoSuggest';
import { match } from 'react-router';


const styles = (theme: Theme) => createStyles({

  search: {
    padding: '0px 10px 0px 10px'
  },
});

const projectSearchForm = (props: WithStyles<typeof styles>&{match: match<{tag:string}>}) => {
  const { classes } = props;
  if(props.match.params.tag){
    return <p>`Filtering by ${props.match.params.tag} tag` </p>
  }
  return (
  <div className={classes.search}>
  <Typography>
  Search tags
  <SearchAutoSuggest mode="tag"/>
  </Typography>
  
  <Typography >
  Search projects
  <SearchAutoSuggest mode="project"/>
  </Typography>
  </div>)
}

export default withStyles(styles, { withTheme: true })(projectSearchForm);