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
    // fontSize: theme.spacing.unit * 0.96
  },
});

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
        <p><strong>Libraries: </strong>
          <Typography className={classes.title} color="textSecondary">
            {project.libraries.map(lib =>
              <Chip
                clickable
                label={lib}
                className={classes.chip}
                component={(props: ChipProps & LinkProps) => <Link to={"/projects?filterByTag=" + lib} {...props} />} />
            )}
          </Typography>
        </p>
        <p><strong>Areas: </strong>
          <Typography className={classes.title} color="textSecondary">
            {project.area.map(tag =>
              <Chip
                clickable
                label={tag}
                className={classes.chip}
                component={(props: ChipProps & LinkProps) => <Link to={"/projects?filterByTag=" + tag} {...props} />} />
            )}
          </Typography>
        </p>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles, { withTheme: true })(Projects);
