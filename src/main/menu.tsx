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
import contributionsIcon from '../icon/contributionsIcon';
import projectsIcon from '../icon/projectsIcon';
import technologiesIcon from '../icon/technologiesIcon';
import experticeIcon from '../icon/experticeIcon';
import qualitiesIcon from '../icon/qualitiesIcon';
import workExperience from '../icon/workExperience.tsx';
import educationIcon from '../icon/educationIcon';
import githubProfileIcon from '../icon/githubProfileIcon';
import linkedinProfileIcon from '../icon/linkedinProfileIcon';
import stackOverflowIcon from '../icon/stackOverflowIcon';
import homeIcon from '../icon/homeIcon';

export const drawerWidth = window.innerWidth> 800 ? 400 : window.innerWidth///2///(window.innerWidth)  '400';

const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  }
});
const drawer = (mainProps: WithStyles<typeof styles> & { open: boolean, handleDrawerClose: () => void }) => {
  return <Drawer
    variant="persistent"
    anchor="left"
    open={mainProps.open}
    classes={{
      paper: mainProps.classes.drawerPaper,
    }}
  >
    <div className={mainProps.classes.drawerHeader}>
      <IconButton onClick={mainProps.handleDrawerClose}>
        {mainProps.theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </div>
    <Divider />
    <List>
      <ListItem>
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/" {...props} />} >
          <Avatar>
            {homeIcon()}
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
          <ListItemText primary="Projects" secondary="Open Source Projects I've authored" onClick={mainProps.handleDrawerClose} />
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
        <Button component={(props: ButtonProps & LinkProps) => <Link to="/page2" {...props} onClick={mainProps.handleDrawerClose} />} >
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

      <ListItem>
        <Button color="inherit" title="StackOverflow Profile" href="https://stackoverflow.com/users/1179379/cancerbero">
        <Avatar>
          {stackOverflowIcon()}
        </Avatar>
          <ListItemText primary="StackOverflow Profile" secondary="Sometimes I answer questions" />
        </Button>
      </ListItem>

    </List>
  </Drawer>

}

export default withStyles(styles, { withTheme: true })(drawer);
