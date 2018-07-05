// import * as React from 'react';
// import * as PropTypes from 'prop-types';
// import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import theme from './theme';

// const styles = ({ palette, spacing }: Theme) => createStyles({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// })


// class TextButtons extends React.Component<WithStyles<typeof styles>> {

// render(){
//   return (
//     <div>
//       <Button className={this.props.classes.button}>Default</Button>
//       <Button color="primary" className={this.props.classes.button}>
//         Primary
//       </Button>
//       <Button color="secondary" className={this.props.classes.button}>
//         Secondary
//       </Button>
//       <Button disabled className={this.props.classes.button}>
//         Disabled
//       </Button>
//       <Button href="#text-buttons" className={this.props.classes.button}>
//         Link
//       </Button>
//       <input
//         accept="image/*"
//         className={this.props.classes.input}
//         id="flat-button-file"
//         multiple
//         type="file"
//       />
//       <label htmlFor="flat-button-file">
//         <Button component="span" className={this.props.classes.button}>
//           Upload
//         </Button>
//       </label>
//     </div>
//   )
// }
// }
// export default withStyles(styles)(TextButtons);



// // import { withStyles } from '@material-ui/core/styles';

// // const styles = {
// //   root: {
// //     backgroundColor: 'red',
// //   },
// // };

// // class MyComponent extends React.Component<WithStyles<typeof styles>> {
// //   render () {
// //     return <div className={this.props.classes.root} />;
// //   }
// // }

// // export default withStyles(styles)(MyComponent);