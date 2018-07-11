import { Button, Card, CardActions, CardContent, Chip, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import { ChipProps } from '@material-ui/core/Chip';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as classNames from 'classnames';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Project } from './projectMetadata';


const styles = (theme: Theme) => createStyles({
  title: {
    color: theme.palette.text.primary,
  },
  hide: {
    display: 'none'
  },
  chip: {
    margin: theme.spacing.unit,
  },
  card: {
    height: '100%',
  }, 
  // cardActions: {
  //   [theme.breakpoints.up('md')]: {
  //     display: 'block'
  //   }
  // }
});

function Projects(props: WithStyles<typeof styles> & { project: Project }) {
  const { classes } = props;
  const project = props.project
  return (
    <Card className={classes.card}>
      <CardContent>

          <Button type="text" className={classNames(!project.repositoryUrl && classes.hide)} href={project.repositoryUrl}>
            <iframe src={`https://ghbtns.com/github-btn.html?user=cancerberosgx&repo=${project.name}&type=star&count=true`} frameBorder="0" scrolling="0" width="80px" height="20px" ></iframe>
            </Button>
          <Button type="text" className={classNames(!project.projectPage && classes.hide)} href={project.projectPage}>
          
        <Typography>
          Home Page
        </Typography>
          </Button>

        <Typography variant="headline" component="h2">
          {project.name}
        </Typography>
        {/* <Typography color="textSecondary">
        </Typography> */}
        <Typography>
          {project.description}
        </Typography>
      </CardContent>

      <ExpansionPanel defaultExpanded={false}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography >Tags:</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <CardActions>
            <div className={classNames(!project.libraries.length && classes.hide)} >
              <strong>Libraries: </strong>
              <Typography className={classes.title} color="textSecondary">
                {project.libraries.map(lib =>
                  <Chip
                    clickable
                    label={lib}
                    className={classes.chip}
                    component={(props: ChipProps & LinkProps) => <Link to={"/projects/tag/" + lib} {...props} />} />
                )}
              </Typography>
            </div>
            <div className={classNames(!project.experticeArea.length &&   classes.hide)} ><strong>Areas: </strong>
              <Typography className={classes.title} color="textSecondary">
                {(project.experticeArea || []).map(tag =>
                  <Chip
                    clickable
                    label={tag}
                    className={classes.chip}
                    component={(props: ChipProps & LinkProps) => <Link to={"/projects/tag/" + tag} {...props} />} />
                )}
              </Typography>
            </div>
          </CardActions>
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </Card>
  );
}

export default withStyles(styles, { withTheme: true })(Projects);
