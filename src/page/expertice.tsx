import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as classNames from 'classnames';
import * as React from 'react';

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
    height: '100%',
  }
});

const contributions: { name: string, url: string, description: string }[] = [

  {
    name: 'performance',
    url: ' ',
    description: 'TODO'
  },


  {
    name: 'Language Theory',
    url: ' ',
    description: 'WIP  parsers, AST, static code analysis, transpillers, compilers, etc, java2script, gwt, eclipse AST java thing, TypeScript COmpiler API and Language Service'
  },

  {
    name: 'extensibility',
    url: '',
    description: `WIP`
  },  
  {
    name: 'documentation',
    url: '',
    description: `TODO`
  },  
  
  {
    name: 'Security',
    url: 'WIP',
    description: 'Security is not my forte and. I know the basics of XSS and SQL injections vulnerabilities and also I know that important security vulnerabilities is often caused by a bad design / UX so Im always alert when designing or implementing web applications. Although I was responsible of checking for vulnerabilities in large codebases (mostly front-end), manually, using automated tools, and even static code analysis, I must admit is not my forte, my knowledge is not extensive and I don\' enjoy doing it.'
  },  
  {
    name: 'WIP',
    url: 'WIP',
    description: 'WIP'
  },

]

function contributionsPage(props: WithStyles<typeof styles>) {
  const { classes, theme } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={24} alignItems="stretch">
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography> 
              <h3 className={classNames('page-home', theme.palette.primary.main, classes.welcome)}>Areas of Expertice</h3>
              <div>WIP</div>
              </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24} alignItems="stretch">
        {contributions.map((contribution, i) =>
          <Grid item xs={12} sm={6} lg={4} key={i}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  <Button href={contribution.url}>{contribution.name}</Button>
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

export default withStyles(styles, { withTheme: true })(contributionsPage);