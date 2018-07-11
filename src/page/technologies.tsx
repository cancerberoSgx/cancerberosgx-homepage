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
    height: '100%',
  }
});

const technologies: { name: string, url: string, description: string }[] = [

  {
    name: 'JavaScript Programming Language',
    url: '',
    description: 'I have more than 15 years of experience in JavaScript, and lived the early - pre-ajax  days when it was used only as small scripts in forms. I followed its evlolution, used early transpilers and keep updated in new ecma versions, standards, design patterns and technologies. . '
  },
  {
    name: 'Node.js',
    url: 'http://java2script.github.io/java2script/',
    description: `Ten years ago, when the concept of transpilers was not so common and GWT was in its early stages, the project java2script was one of the best tools to be able to write Rich Client Applications using Java programming language and transpile them to JavaScript. I made several contributions there so the original author made me co-author of the project. I learn a lot about code parsing and AST (both Java's and JavaScript's), and Eclipse Platform APIs and I implemented several libraries wrappers so people could write client code using Java and most used JavaScript libraries. Although today java2script is eclipsed by other technologies like GWT or TypeScript at that time was very promised and give me the opportunity to learn a lot. `
  },  
  
  {
    name: 'Browser\'s related standards',
    url: 'w3c.org',
    description: 'I\'m an expert in several APIs and standards related to the Browser like HTML, DOM, CSS, SVG, XML, XSD, DTD, almost all HTML5 APIs and new emerging standards like '
  },  
  
  {
    name: 'Browser\'s related standards',
    url: 'w3c.org',
    description: 'I\'m an expert in several APIs and standards related to the Browser like HTML, DOM, CSS, XML, XSD, DTD, HTML5 APIs'
  },  

  {
    name: 'WIP',
    url: 'WIP',
    description: 'WIP'
  },  

  {
    name: 'WIP',
    url: 'WIP',
    description: 'WIP'
  },  

  

]

function page1(props: WithStyles<typeof styles>) {
  const { classes, theme } = props;

  return (

    <div className={classes.root}>
      <Grid container spacing={24} alignItems="stretch">

        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography> <h3 className={classNames('page-home', theme.palette.primary.main, classes.welcome)}>Mastered Technologies </h3>
              <div>This is a list of the technologies (I think) I master or others that although I'm not an expert I've used extensively </div></Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24} alignItems="stretch">
        {technologies.map(contribution =>
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