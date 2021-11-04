import React from 'react';
import { EpisodeList } from '../item-list-components';
import { EpisodeDetails } from '../item-details-components';
import Filter from '../filter';
import { connect } from 'react-redux';

const EpisodesPage = ({filter}) => {
    return (
      <React.Fragment>
         <Filter filter = {filter.episodes}/>
        <EpisodeList />
        <EpisodeDetails/>
      </React.Fragment>
    );
}

const mapStateToProps = ({ people: {filter}}) => {
  return{ 
    filter
  }
}

export default connect(mapStateToProps, null)(EpisodesPage)
