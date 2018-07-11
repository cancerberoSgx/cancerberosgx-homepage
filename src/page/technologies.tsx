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
    description: 'I have more than 15 years of experience in JavaScript, and lived the early - pre-ajax  days when it was used only as small scripts in forms. I followed its evolution, used early transpilers and keep updated in new ecma versions, standards, design patterns and technologies. . '
  },
  {
    name: 'Node.js',
    url: ' ',
    description: ` `
  },  
  
  {
    name: 'Browser\'s related standards',
    url: 'w3c.org',
    description: 'I consider myself an expert in several APIs and standards related to the Browser like HTML, DOM, CSS, SVG, XML, XSD, DTD, I try to be up-to day with new standards and proposals since more and more the browser seems to be the most important platform for interactive applications and new standards open important opportunities'
  },  
  
  {
    name: 'Developer tools',
    url: 'w3c.org',
    description: 'node.js based developer tools like webpack, browserify, grunt, gulp, npm, transpilers like babel, TypeScript, compilers APIs like sass, less, handlebars, optimization tools like coded minification tools like uglify, google closure compiler,  image optimizers, code indentation, git hooks '
  },  


  {
    name: 'Version control',
    url: 'w3c.org',
    description: 'My first contact was cvs, as almost everybody after that I used SVN. And now git is my preference and I also used Perforce a lot. '
  },  


  {
    name: 'Data bases',
    url: '',
    description: 'I have used some relational Data base systems like Oracle, MySql and Postgress. Although in general I always program using a ORM library like hibernate or TypeORM I think I have an acceptable knowledge of the SQL language itself. I also have experience with non relational databases like MongoDb and Redis, particularly the first one.'
  },  
  {
    name: 'Java / J2EE',
    url: 'WIP',
    description: 'WIP'
  },  

  {
    name: 'Linux',
    url: 'WIP',
    description: 'WIP'
  },  

  
  {
    name: 'GWT',
    url: 'WIP',
    description: 'WIP'
  },  
  {
    name: 'eclipse Platform',
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
            <Typography> <h3 className={classNames('page-home', theme.palette.primary.main, classes.welcome)}>WIP - Mastered Technologies </h3>
              <div>WIP - This is a list of the technologies (I think) I master or others that although I'm not an expert I've used extensively </div>
              <p>
              Regarding technologies you will never hear me saying that a certain technology is superior than another in an absolute manner. Before solving a problem I always care to choose the technology that better solves the important aspects of the problem. For example, although I worked a lot tunning system performance, if performance is not important I won't hesitate to choose a less performant technology if more important aspects of the problem are resolved better, like implementation time or stability. I know that for people working only in one area for long time, particularly in security or performance, it could be hard to realize that sometimes that area is not an important aspect of the problem.</p> 
              
              <p>And when I can, I consider the word <strong>productivity</strong> to not only mean "amount of software produced over time" but also learning is a very important factor, so sometimes I even consider not using a library or framework that would solve a problem faster and better, and implement a solution from scratch, just by the sake of learning how to solve a concrete part of the problem. </p></Typography>
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