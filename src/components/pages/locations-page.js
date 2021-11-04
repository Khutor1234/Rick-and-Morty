import React from 'react';
import { LocationList } from '../item-list-components';
import { LocationDetails } from '../item-details-components';
import Filter from '../filter';
import { connect } from 'react-redux';

const LocationsPage = ({filter}) => {
  return (
    <React.Fragment>
       <Filter filter = {filter.locations}/>
      <LocationList/>
      <LocationDetails/>
    </React.Fragment>
  );
};

const mapStateToProps = ({ people: {filter}}) => {
  return{ 
    filter
  }
}

export default connect(mapStateToProps, null)(LocationsPage)
