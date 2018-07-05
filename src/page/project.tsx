import * as React from 'react';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardContent, Typography, CardActions, Button, Card, Chip } from '@material-ui/core';
import { Project, language, runtime, tag } from './projectData';
import * as classNames from 'classnames';
import { ChipProps } from '@material-ui/core/Chip';
import { LinkProps, Link } from 'react-router-dom';


const styles = (theme: Theme) => createStyles({
  title: {
    color: theme.palette.text.primary,
  },
  hide: {
    display: 'none'
  },
  chip: {
    margin: theme.spacing.unit,
    // fontSize: theme.spacing.unit*0.9
  },
});


const projects: Project[] = [
  {
    "name": "short-jsdoc",
    "description": "jsdoc implementation with flexible and shorter syntax, written from scratch, with emphasis in rich type support",
    "repositoryUrl": "https://github.com/cancerberoSgx/short-jsdoc",
    "projectPage": "http://cancerberosgx.github.io/short-jsdoc/doc/guide/",
    "language": [language.JavaScript],
    "runtime": [runtime.NodeJs, runtime.browser],
    "tags": [
      tag.JavaScript, tag.parser, tag.documentation
    ]
  }
]

function Projects(props: WithStyles<typeof styles> & { project: Project }) {
  const { classes } = props;
  const project = props.project
  return (
    <Card>
      <CardContent>
        <Typography  >
          <Button type="text" className={classNames(!project.projectPage && classes.hide)} href={project.projectPage}>Home Page</Button>
          <Button type="text" className={classNames(!project.repositoryUrl && classes.hide)} href={project.repositoryUrl}>Repository</Button>
        </Typography>
        <Typography variant="headline" component="h2">
          {project.name}
        </Typography>
        <Typography color="textSecondary">
        </Typography>
        <Typography component="p">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>

        <Typography className={classes.title} color="textSecondary">
        
        {project.tags.map(tag =>
            <Chip
              clickable
              label={tag}
              className={classes.chip}
              component={(props: ChipProps & LinkProps) => <Link to={"/projects?filterByTag="+tag} {...props} />} />
          )}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles, {withTheme: true})(Projects);
