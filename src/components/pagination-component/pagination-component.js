import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './style';
import { connect } from 'react-redux';
import { onPageChange} from '../../actions';

const PaginationComponent = ({paginationData, onPageChange}) => {

  const classes = useStyles();

  return (
    <div className={classes.buttons}>
        {Array.from(Array(paginationData.pages), (e, i) => {
            return <Button key={i} variant="contained" color="primary" className={classes.button} onClick ={() => onPageChange(i+1)}>{i+1}</Button>
        })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
      onPageChange: (page) => dispatch(onPageChange(page)), 
    }
}


export default connect(null, mapDispatchToProps)(PaginationComponent)
