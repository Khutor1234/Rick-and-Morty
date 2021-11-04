import React from 'react';
import Header from '../header';
import {PeoplePage, EpisodesPage, LocationsPage, WatchListPage} from '../pages';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/"
                render={() => <Typography variant="h2" className={classes.header}>Welcome to Rick and Morty test task</Typography>}
                exact />
        <Route path="/characters" component={PeoplePage} />
        <Route path="/episodes" component={EpisodesPage} />
        <Route path="/locations" component={LocationsPage} />
        <Route path="/watch-list"  component={WatchListPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
