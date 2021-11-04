import React, {useState, useEffect} from 'react';
import useStyles from './style';
import {Typography, Grid, List, ListItem, Paper, Modal} from '@material-ui/core';

const Record = ({ item, field, label }) => {
  return (
    <ListItem>
      <span style={{fontWeight: 'bold'}}>{label}</span>
      <span style={{margin: '0 5px'}}>{ item[field] }</span>
    </ListItem>
  );
};

export {
  Record
};

const ItemDetails = (props) => {

  if (props.item) {
    const [open, setOpen] = useState(true);
    const classes = useStyles();
    const {item} = props;
    const { name, image } = item;

    useEffect(() => {
      setOpen(true);
    }, [item]);
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}>
        <Paper  className={classes.paper}>
          <Grid container>
            <Grid item>
              {
                image ? <img src={image} alt="item"/> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseQYHue7Zr7V4MtekJW-wnrWBSt24T5ROow&usqp=CAU'/>
              }
            </Grid>
            <Grid item>
              <Typography variant="h4" className={classes.header}>{name}</Typography>
              <List>
                {
                  React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, { item });
                  })
                }
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    );
  }

  return null
}

export default ItemDetails
