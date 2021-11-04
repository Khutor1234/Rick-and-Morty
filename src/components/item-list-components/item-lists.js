import React from 'react';
import ItemList from '../item-list';
import { withService, withChildFunction, compose } from '../hoc-helpers';
import RenderPerson from './render-person';
import RenderList from './render-list';
import { fetchData, onItemSelected} from '../../actions';
import { connect } from 'react-redux';

const mapPersonMethodsToProps = (dispatch, ownProps) => {
  return {
    fetchData: (page, field, value) => fetchData(ownProps.service.getAllPeople, dispatch)(page,field,value),
    onItemSelected: (item) => dispatch(onItemSelected(item)), 
  }
}

const mapEpisodeMethodsToProps = (dispatch, ownProps) => {
  return {
    fetchData: (page, field, value) => fetchData(ownProps.service.getAllEpisodes, dispatch)(page, field, value),
    onItemSelected: (item) => dispatch(onItemSelected(item)),
  }
};


const mapLocationMethodsToProps = (dispatch, ownProps) => {
  return {
    fetchData: (page, field, value) => fetchData(ownProps.service.getAllLocations, dispatch)(page, field, value),
    onItemSelected: (item) => dispatch(onItemSelected(item)),
  }
};

const mapStateToProps = ({ people: {data, loading, error, page, filteredItem}}) => {
  return{ 
    filteredItem,
    data,
    loading, 
    error,
    page
  }
}

const PersonList = compose(
                     withService(),
                     connect(mapStateToProps, mapPersonMethodsToProps),
                     withChildFunction(RenderPerson)
                   )(ItemList);

const EpisodeList = compose(
                    withService(),
                    connect(mapStateToProps, mapEpisodeMethodsToProps),
                    withChildFunction(RenderList)
                  )(ItemList);

const LocationList = compose(
                     withService(),
                     connect(mapStateToProps, mapLocationMethodsToProps),
                     withChildFunction(RenderList)
                   )(ItemList);

export {
  PersonList,
  LocationList,
  EpisodeList
}
