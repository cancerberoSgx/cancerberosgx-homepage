import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardContent, Typography, CardActions, Button, Card, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { projects } from '../project/projectData';
import Project from '../project/project'
import * as classNames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchAutoSuggest from '../project/projectSearchAutoSuggest';
import { match } from 'react-router';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonProps } from '@material-ui/core/Button';


const styles = (theme: Theme) => createStyles({

  search: {
    padding: '0px 10px 0px 10px'
  },
});

const projectSearchForm = (props: WithStyles<typeof styles> & { match: match<{ tag: string , project: string}> }) => {
  const { classes } = props
  return (
    <Grid container spacing={24} className={classes.search}>
      {((props.match.params.tag || props.match.params.project ) ? [1] : []).map(a=>
      <Grid item xs={12}>Filtering by {props.match.params.tag ? 'tag' : props.match.params.project ? 'project' : ''} containing "{props.match.params.tag || props.match.params.project}". <Button component={(props: ButtonProps & LinkProps) => <Link to="/projects" {...props} />}>Clear Filters</Button></Grid >
      )}
      <Grid item xs={12} sm={6} >
        <Typography>
          Search tags: 
          <SearchAutoSuggest mode="tag" />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} >
        <Typography >
          Search projects: 
          <SearchAutoSuggest mode="project" />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles, { withTheme: true })(projectSearchForm);