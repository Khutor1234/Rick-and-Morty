import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { connect } from 'react-redux';

const PersonDetails = ({selectedItem}) => {
  return (
    <ItemDetails item = {selectedItem} >
      <Record field="gender" label="Gender:" />
      <Record field="status" label="Status:" />
      <Record field="species" label="Species:" />
    </ItemDetails>
  );
};

const mapStateToProps = ( {people: {selectedItem}}) => {
  return { 
    selectedItem
  }
}

export default connect(mapStateToProps, null)(PersonDetails);
