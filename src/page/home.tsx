import { Avatar, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
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
    [theme.breakpoints.up('md')]: {
      maxWidth: 345,
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }, inline: {
    display: 'inline-flex'
  },
});

function page1(props: WithStyles<typeof styles>) {
  const { classes, theme } = props;

  return (
    <Grid container spacing={24} alignItems="stretch">
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image='me.png'
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Sebastián Gurin
          </Typography>
            <Typography component="p">
              Also known as <em>cancerberosgx</em>, software developer, new technologies learning enjoyer TODO TODO TODO
          </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}>
          <Typography> <h3 className={classNames('page-home', theme.palette.primary.main, classes.welcome)}>Welcome to <span>Sebastián Gurin</span>'s Personal Page</h3>
            <p>My name is Sebastian Gurin and I'm software developer TODO TODO TODO </p>
            <p>This site details my expertice and experience, and in particular, will lists open source projects I've written or contribute to. </p></Typography>



        </Paper>
      </Grid>


      <Grid item sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography variant="headline" component={(props: TypographyProps & LinkProps) => <Link to="/projects" {...props} />}><Avatar component="span" className={classNames(classes.inline)}>
              {projectsIcon()}
            </Avatar>Projects</Typography>
            <Typography gutterBottom variant="subheading"  >
              Open Source Projects I've authored
          </Typography>
            {/* </Button> */}
            <Typography component="p" variant="body1">
              This is probably the most important part of this website, because in general, these open source projects is what better describe both my knowledge, expertice and personal technology preferences.
          </Typography>
            {/* </Link> */}
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.paper}>
          <CardContent>
            <Typography variant="headline" component={(props: TypographyProps & LinkProps) => <Link to="/contributions" {...props} />}>
              <Avatar component="span" className={classNames(classes.inline)}>
                {contributionsIcon()}
              </Avatar>Contributions</Typography>
            <Typography gutterBottom variant="subheading"  > Contributions to open source projects that I feel proud of  </Typography>
            <Typography component="p" variant="body1"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates fugit aut ducimus eaque aperiam, ad voluptatum minus repudiandae dicta possimus aspernatur illum dolorum? Temporibus eaque voluptates quaerat quis saepe! TODO </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.paper} >
          <CardContent>
            <Typography variant="headline" component={(props: TypographyProps & LinkProps) => <Link to="/technologies" {...props} />}>
              <Avatar component="span" className={classNames(classes.inline)}>
                {technologiesIcon()}
              </Avatar>Technologies</Typography>
            <Typography gutterBottom variant="subheading"  >Mastered technologies, programming languages, etc</Typography>
            <Typography component="p" variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae veniam consequatur, velit possimus natus voluptatum a qui unde obcaecati. Vel repudiandae nisi maiores unde iure incidunt assumenda rem accusamus soluta.TODO </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.paper} >
          <CardContent>
            <Typography variant="headline" component={(props: TypographyProps & LinkProps) => <Link to="/expertice" {...props} />}>
              <Avatar component="span" className={classNames(classes.inline)}>
                {technologiesIcon()}
              </Avatar>Expertice</Typography>
            <Typography gutterBottom variant="subheading"  >Areas of expertice like performance, documentation, etc</Typography>
            <Typography component="p" variant="body1"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. In deserunt aspernatur architecto commodi beatae ea perspiciatis culpa a quidem molestiae necessitatibus error sequi tempora nesciunt harum, vero alias odio praesentium. TODO </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.paper} >
          <CardContent>
            <Typography variant="headline" component={(props: TypographyProps & LinkProps) => <Link to="/workExperience" {...props} />}>
              <Avatar component="span" className={classNames(classes.inline)}>
                {technologiesIcon()}
              </Avatar>Work Experience</Typography>
            <Typography gutterBottom variant="subheading"  >(paid) Jobs in companies or as freelancer</Typography>
            <Typography component="p" variant="body1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora enim commodi cum id minima delectus error temporibus totam eos. Magnam tenetur sequi maxime earum! Fugiat perspiciatis tempore earum exercitationem reprehenderit! TODO </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.paper} >
          <CardContent>
            <Typography variant="headline" component={(props: TypographyProps & LinkProps) => <Link to="/education" {...props} />}>
              <Avatar component="span" className={classNames(classes.inline)}>
                {technologiesIcon()}
              </Avatar>Education</Typography>
            <Typography gutterBottom variant="subheading"  >Lorem ipsum dolor sit TODO .</Typography>
            <Typography component="p" variant="body1"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sit, molestiae qui exercitationem pariatur beatae corrupti ut dolorum et, asperiores officia laboriosam sequi, voluptas voluptatum harum velit iure! Hic, deleniti? TODO </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Grid>

    </Grid>
  );
}

export default withStyles(styles, { withTheme: true })(page1);