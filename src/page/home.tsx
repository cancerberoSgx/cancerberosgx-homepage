import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ListItem, Button, Avatar, ListItemText, Typography } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import { LinkProps, Link } from 'react-router-dom';
import * as classNames from 'classnames'
import color from '@material-ui/core/colors/blue';


const styles = (theme: Theme) => createStyles({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize*1.4,
    color: theme.palette.primary.main
  }
});

function page1(props: WithStyles<typeof styles>) {
  const { classes, theme } = props;

  return (
    <Grid container spacing={24} alignItems="center" alignContent="center" justify="center">
      <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
        <Paper className={classes.paper}>
          <h3 className={classNames('page-home', theme.palette.primary.main, classes.welcome)}>Welcome to <span>Sebastián Gurin</span>'s Personal Page</h3>
          <p>My name is Sebastian Gurin and I'm software developer TODO TODO TODO </p>
          <p>This site details my expertice and experience, and in particular, will lists open source projects I've written or contribute to. </p>
        </Paper>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>
          <ListItem>
            <Button component={(props: ButtonProps & LinkProps) => <Link to="/projects" {...props} />} >
              <Avatar>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#000000" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
                </svg>
              </Avatar>
              <ListItemText primary="Projects" secondary="Open Source Projects I've authored" />
              <Typography>This is probably the most important part of this website, because in general, these open source projects is what better describe both my knowledge, expertice and personal technology preferences. </Typography>
            </Button>
          </ListItem>
        </Paper>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>xs=6 sm=6</Paper>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>xs=4 sm=4</Paper>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>xs=4 sm=4</Paper>
      </Grid>
      <Grid item sm={12} md={12} lg={6}>
        <Paper className={classes.paper}>xs=4 sm=4</Paper>
      </Grid>
    </Grid>
  );
}


export default withStyles(styles, {withTheme: true})(page1);