import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PaginationComponent from '../pagination-component';


class ItemList extends Component{

  componentDidMount(){
    this.props.fetchData(this.props.page, this.props.filteredItem.field, this.props.filteredItem.value);
  } 

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page || this.props.filteredItem !== prevProps.filteredItem) {
      this.props.fetchData(this.props.page, this.props.filteredItem.field, this.props.filteredItem.value);
    }
  }

  render(){
    const { data, loading, error, onItemSelected, children: renderLabel } = this.props;
    
    //TODO: refactor this one, currently I don't know better way
    if(!data.results){
      data.results=[];
    }

    const items = data.results.map((item) => {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <Grid item xs={12} sm={6} md={3} 
            key={id}
            onClick={() => onItemSelected(item)}>
          {label}
        </Grid>
      );
    });

    if(loading){
      return <Spinner/>
    }

    if(error){
        return <ErrorIndicator/>
    }

    return (
      <React.Fragment>
        <Grid container spacing={4} style = {{padding: '50px'}}>
        {items}
      </Grid>
      <PaginationComponent paginationData={data.info}/>
      </React.Fragment>
    );
  }
};


export default ItemList
