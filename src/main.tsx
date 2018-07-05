import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import page1 from './page/page1';
import home from './page/home';

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
      <Route path='/page1' component={page1}/>
      {/* <Route path='/schedule' component={Schedule}/> */}
    </Switch>

    </div>
  );
}

export default withStyles(styles)(main);