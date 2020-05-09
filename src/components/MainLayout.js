import React from 'react';
// import clsx from 'clsx';
import { styled } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = styled('div')({
  display: 'flex',
})

const Content = styled('div')({
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
})

const AppSpacer = styled('div')(({theme}) => theme.mixins.toolbar)

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Mikey Bitch
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const MainLayout = ({children}) => {
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlers = {
    handleDrawerOpen,
    handleDrawerClose
  }

  return (
    <Layout>
      <Navbar { ...handlers } open={open}> </Navbar>
      <Sidebar { ...handlers } open={open} />
      <Content>
        <AppSpacer />
        { children }
        <Box pt={4}>
          <Copyright />
        </Box>
      </Content>
    </Layout>
  )
}

export default MainLayout
