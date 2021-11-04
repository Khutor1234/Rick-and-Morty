import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { connect } from 'react-redux';

const LocationDetails = ({selectedItem}) => {

  return (
    <ItemDetails item = {selectedItem} >
      <Record field="dimension" label="Dimension:" />
      <Record field="type" label="Type:" />
    </ItemDetails>
  );
};

const mapStateToProps = ( {people: {selectedItem}}) => {
  return { 
    selectedItem
  }
}

export default connect(mapStateToProps, null)(LocationDetails);

