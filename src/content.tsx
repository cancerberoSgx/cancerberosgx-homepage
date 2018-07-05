import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import AppBar from './appBar';


const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    marginTop: 64
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function layout (props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Grid container spacing={24}>
      {/* <Grid item xs={12}> */}
        {/* <AppBar/> */}
      {/* </Grid> */}
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>xs=6 sm=3</Paper>
      </Grid>
    </Grid>
    </div>
  );
}

// FullWidthGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(layout);