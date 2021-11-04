import React from 'react';
import {Chip,Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';

const RenderPerson = ({ name, image,status}) => {
    return(
        <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height='180'
                image={image}
                title="Image person"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Chip 
                        label={status}
                        color={status==='Alive'?'primary':status==='unknown'?'error':'secondary'}
                        className="green"
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default RenderPerson;
