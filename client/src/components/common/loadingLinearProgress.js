import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

function ColoredLinearProgress(props) {
  const { classes } = props;
  return (
    <LinearProgress
      {...props}
      classes={{
        colorPrimary: classes.colorPrimary,
        barColorPrimary: classes.barColorPrimary,
      }}
    />
  );
}

const styles = {
  colorPrimary: {
    backgroundColor: '#e8eaf6',
  },
  barColorPrimary: {
    backgroundColor: '#03a9f4',
  },
};

export default withStyles(styles)(ColoredLinearProgress);
