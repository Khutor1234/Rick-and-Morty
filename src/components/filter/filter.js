import React from 'react';
import { TextField} from '@material-ui/core';
import useStyles from './style';
import { connect } from 'react-redux';
import { onFilterChange } from '../../actions';

const Filter = ({filter ,onFilterChange, filteredItem}) => {
  const classes = useStyles();

  return (
    <div className={classes.filter}>
      {
        filter.map((item) => {
          return (
            <TextField
              key={item}
              className={classes.item}
              variant="filled"
              label={item}
              value ={filteredItem && filteredItem.field === item ? filteredItem.value : ''}
              onChange={e => onFilterChange(e.target.value, item)} />
          )
        })
      }
      </div>
  );
};

const mapDispatchToProps = (dispatch) => {
	return {
    onFilterChange: (value, item) => dispatch(onFilterChange(value, item)), 
	}
}

const mapStateToProps = ({ people: {filteredItem}}) => {
  return{ 
    filteredItem
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)