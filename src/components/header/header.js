import React from 'react';
import {AppBar, Container, Toolbar, Breadcrumbs,Link} from '@material-ui/core';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position = 'fixed' className={classes.header}>
      <Container fixed>
          <Toolbar>
              <Breadcrumbs className={classes.label}>
                <Link className={classes.link} color="inherit" href="/">DB</Link>
                <Link className={classes.link} color="inherit" href="/characters/">Characters</Link>
                <Link className={classes.link} color="inherit" href="/episodes/">Episodes</Link>
                <Link className={classes.link} color="inherit" href="/locations/">Locations</Link>
                <Link className={classes.link} color="inherit" href="/watch-list/">My Watch List</Link>
              </Breadcrumbs>
          </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;