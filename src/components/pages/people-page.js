import React from 'react';
import { PersonList } from '../item-list-components';
import { PersonDetails } from '../item-details-components';
import Filter from '../filter';
import { connect } from 'react-redux';

const PeoplePage = ({filter}) => {
  return (
    <React.Fragment>
      <Filter filter = {filter.characters}/>
      <PersonList/>
      <PersonDetails />
    </React.Fragment>
  );
};

const mapStateToProps = ({ people: {filter}}) => {
  return{ 
    filter
  }
}

export default connect(mapStateToProps, null)(PeoplePage)
