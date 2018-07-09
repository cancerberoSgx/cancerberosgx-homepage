import { Avatar, Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { TypographyProps } from '@material-ui/core/Typography';
import * as classNames from 'classnames';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import contributionsIcon from '../icon/contributionsIcon';
import projectsIcon from '../icon/projectsIcon';
import technologiesIcon from '../icon/technologiesIcon';


const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: '100%',
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize * 1.4,
    color: theme.palette.primary.main
  },
  card: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 345,
    }
  }
});

const contributions: { name: string, url: string, description: string }[] = [
  {
    name: 'yui4 java mention in Yahoo YUI blog',
    url: 'https://yuiblog.com/blog/2010/04/13/yui4java-a-new-java-to-javascript-translator-using-yui-2/',
    description: 'In my early days with technologies like GTW and java2script I made a port of the whole YUI version 2 and 3 libraries so people can write applications using these libraries in the Java Programming language. This is the mention to me and my project yui4java that the Yahoo YUI team made in their blog. '
  },
]

function page1(props: WithStyles<typeof styles>) {
  const { classes, theme } = props;

  return (

    <div className={classes.root}>
      <Grid container spacing={24} alignItems="stretch">

        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography> <h3 className={classNames('page-home', theme.palette.primary.main, classes.welcome)}>Open Source Contributions</h3>
              <p>This is just a list of contributions to (other's) open source projects that I feel proud of or just mentions to me in blogs, tweets, etc. </p></Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24} alignItems="stretch">
        {contributions.map(contribution =>
          <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography>
                </Typography>
                <Typography variant="headline" component="h2">
                  <Button href={contribution.url}>  {contribution.name}</Button>
                </Typography>
                <Typography color="textSecondary">
                  {contribution.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(page1);