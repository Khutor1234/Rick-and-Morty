import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { connect } from 'react-redux';

const EpisodeDetails = ({selectedItem}) => {
  return (
    <ItemDetails item = {selectedItem} >
      <Record field="air_date" label="Air Date:" />
      <Record field="episode" label="Episode:" />
    </ItemDetails>
  );
};

const mapStateToProps = ( {people: {selectedItem}}) => {
  return { 
    selectedItem
  }
}

export default connect(mapStateToProps, null)(EpisodeDetails);
