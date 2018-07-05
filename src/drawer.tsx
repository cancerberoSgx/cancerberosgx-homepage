import * as React from 'react';
// import PropTypes from 'prop-types';
import * as classNames from 'classnames';
import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  hide: {
    display: 'none',
  },
});

const drawer = (props: WithStyles<typeof styles>&{open: boolean, handleDrawerClose: ()=>void})=>(
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
    holas
    <Divider />
    joooolas
  </Drawer>
);

export default withStyles(styles, { withTheme: true })(drawer);
