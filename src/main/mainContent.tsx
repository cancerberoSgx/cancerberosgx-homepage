import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import { Route, Switch,  } from 'react-router';
import projects from '../page/projects';
import home from '../page/home';

const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: 64
  },
});

function main (props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      
    <Switch>
      <Route exact path='/' component={home}/>
      <Route path='/projects/tag/:tag' component={projects}/>
      <Route path='/projects/project/:project' component={projects}/>
      <Route path='/projects' component={projects}/>
      <Route path="*" component={home}/>
    </Switch>

    </div>
  );
}

export default withStyles(styles)(main);