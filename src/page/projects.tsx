import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { projects } from '../project/projectData';
import Project from '../project/project'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { match } from 'react-router';
import ProjectSearchForm from '../project/projectSearchForm';
import { getProjectAllTags } from '../project/projectMetadata';


const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.fontSize * 1.3,//.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  search: {
    padding: '0px 10px 0px 10px'
  },
})


function ProjectComponent(props: WithStyles<typeof styles> & { match: match<{ tag: string, project: string }> }) {
  const { classes, match } = props;
  let results = projects
  if (props.match.params.tag) {
    results = projects.filter(p => getProjectAllTags(p).find(t => t.tag.includes(props.match.params.tag)))
  }
  else if (props.match.params.project) {
    results = projects.filter(p => p.name.includes(props.match.params.project))
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={24} alignItems="center" alignContent="center" justify="center" >
        <Grid item xs={12} lg={10} >
          <ExpansionPanel defaultExpanded={true}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Open Source Projects of mine</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <p>I strongly believe in learning by doing so I've written several Open Source projects and I must admit is my passion.</p>
                <p>In this page I list some of them more or less in order of those I consider more important, interesting, usefull or singular ending in those that are not. </p>
                <p>Some of them are useless and where written for learning some technology, others just research on a particular area or problem, and others even useful. Some are well tested others have poor quality. Some are pretty big projects, and others very small tools with just a couple lines of code. </p>
                <p>In general these projects are written with JavaScript and run in the browser or in Node.js, but there are a few that are written in other programming languages. </p>
                <p>Because there are several, I've created this form to track them and give an idea of the whole thing. </p>
                <p>Take into account that some were implemented just for learning and several years ago so probably if I would implement them today probably I would choose different technologies or patterns.</p>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={12} lg={10} >
          <ExpansionPanel defaultExpanded={true}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Search</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ProjectSearchForm  {...props} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
      <Grid container spacing={24} alignItems="stretch">
        {results.map((project, i) =>
          <Grid item xs={12} sm={6} lg={4} key={i}>
            <Project project={project} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ProjectComponent);