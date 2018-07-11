import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import githubProfileIcon from '../icon/githubProfileIcon';
import linkedinProfileIcon from '../icon/linkedinProfileIcon';

const AppBarIconsNaked = () =>
  <span style={{float: 'right'}}>

    <IconButton color="inherit" title="Github profile" href="https://github.com/cancerberoSgx">
      {githubProfileIcon()}
    </IconButton>

    <IconButton color="inherit" title="LinkedIn profile" href="https://www.linkedin.com/in/sebastian-gurin/">
      {linkedinProfileIcon()}
    </IconButton>
  </span>


export default withStyles({}, { withTheme: true })(AppBarIconsNaked);