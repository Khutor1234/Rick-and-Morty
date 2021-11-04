import React from 'react';
import {Typography} from '@material-ui/core';

const RenderList = ({id, name}) => {
    return(
        <Typography style={{color: '#fff', cursor: 'pointer'}} >{id}. {name}</Typography>
    )
};

export default RenderList;
