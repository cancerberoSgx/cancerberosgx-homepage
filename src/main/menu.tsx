import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Button, List, ListItem, Avatar, ListItemText } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/Work';
import contributionsIcon from '../icon/contributionsIcon';
import projectsIcon from '../icon/projectsIcon';
import technologiesIcon from '../icon/technologiesIcon';
import experticeIcon from '../icon/experticeIcon';
import qualitiesIcon from '../icon/qualitiesIcon';
import workExperience from '../icon/workExperience.tsx';
import educationIcon from '../icon/educationIcon';
import githubProfileIcon from '../icon/githubProfileIcon';
import linkedinProfileIcon from '../icon/linkedinProfileIcon';

export const drawerWidth = '400';

const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    paddingLeft: '10px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  }
});
const drawer = (props: WithStyles<typeof styles> & { open: boolean, handleDrawerClose: () => void }) => (
  <Drawer
    variant="persistent"
    anchor="left"
    open={props.open}
    classes={{
      paper: props.classes.drawerPaper,
    }}
  >
    <div className={props.classes.drawerHeader}>
      <IconButton onClick={props.handleDrawerClose}>
        {props.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />

    <List>

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/" {...props} />} >
          <Avatar>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="#000000" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
          </Avatar>
          <ListItemText primary="Home" secondary="" />
        </Button>
      </ListItem>

      <Divider />

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/projects" {...props} />} >
          <Avatar>
            {projectsIcon()}
          </Avatar>
          <ListItemText primary="Projects" secondary="Open Source Projects I've authored" />
        </Button>
      </ListItem>

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/contributions" {...props} />} >
          <Avatar>
            
          {contributionsIcon()}
          </Avatar>
          <ListItemText primary="Contributions" secondary="Contributions to open source projects that I feel proud of" />
        </Button>
      </ListItem>

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/page2" {...props} />} >
          <Avatar>{technologiesIcon()}
          </Avatar>
          <ListItemText primary="Technologies" secondary="Mastered technologies, programming languages, etc" />
        </Button>
      </ListItem>

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/page2" {...props} />} >
          <Avatar>{experticeIcon()}
          </Avatar>
          <ListItemText primary="Expertice" secondary="Areas of expertice like performance, documentation, etc" />
        </Button>
      </ListItem>

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/page2" {...props} />} >
          <Avatar>
           {qualitiesIcon()}
          </Avatar>
          <ListItemText primary="Qualities" secondary="Opinions about myself as developer" />
        </Button>
      </ListItem>



      <Divider />

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/work" {...props} />} >
          <Avatar>
            {workExperience()}
          </Avatar>
          <ListItemText primary="Work Experience" secondary="(paid) Jobs in companies or as freelancer" />
        </Button>
      </ListItem>

      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/education" {...props} />} >
          <Avatar>{educationIcon()}
          </Avatar>
          <ListItemText primary="Education" secondary="" />
        </Button>
      </ListItem>

      <Divider />

      <ListItem>
        <Button color="inherit" title="Github profile" href="https://github.com/cancerberoSgx">
        <Avatar>
        {githubProfileIcon()}  
        </Avatar>
          <ListItemText primary="Github profile" secondary="Most of my Open Source contributions are there" />
        </Button>
      </ListItem>

      <ListItem>
        <Button color="inherit" title="LinkedIn profile" href="https://www.linkedin.com/in/sebastian-gurin/">
        <Avatar>
          {linkedinProfileIcon()}
        </Avatar>
          <ListItemText primary="LinkedIn profile" secondary="Have an updated CV" />
        </Button>
      </ListItem>
    </List>


  </Drawer>
);

export default withStyles(styles, { withTheme: true })(drawer);
