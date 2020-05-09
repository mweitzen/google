import React from 'react';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MainLayout from "../components/MainLayout"

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

let { gapi } = window
export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const gapiLoaded = useSelector(state => state.gapi.loaded)

  // Any google api calls should be made inside this check to be sure gapi is loaded
  if (gapiLoaded) {
    console.log(gapi);

  }

  return (
    <MainLayout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <div>
                <p>Lose all your progress</p>
              </div>
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <div>
                <p>On memory not storage</p>
              </div>
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div>
                <p>Wait Why</p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
}
