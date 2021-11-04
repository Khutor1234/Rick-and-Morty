import React, {useState} from 'react';
import {Button, TextField, ListItem, List, ListItemText, Checkbox }from '@material-ui/core';
import useStyles from './style';

const WatchList = () => {
    const classes = useStyles();
    const [episodeName,setEpisodeName] = useState('');
    const [episodeList,setEpisodeList] = useState(localStorage.getItem('episodes')?JSON.parse(localStorage.getItem('episodes')):[]);

    const items = episodeList.map((item) => {
      return (
        <ListItem >
            <Checkbox
              checked={item.checked}
              onClick={()=>handleEpisodeChecking(item)}
            color="primary"
            />
            <ListItemText className={classes.text}  primary={item.name} />
            <Button variant="contained" color="primary" 
              onClick={()=>handleEpisodeRemove(item)}
              >Delete</Button>
    </ListItem>
 
      );
    });
    
    function handleEpisodeChecking(item) {
        let episodeOriginList=JSON.parse(localStorage.getItem('episodes'))
        let index= episodeOriginList.findIndex((episode)=>episode.id===item.id);
        episodeOriginList[index].checked=!episodeOriginList[index].checked;

        localStorage.setItem('episodes',JSON.stringify(episodeOriginList));
        setEpisodeList(JSON.parse(localStorage.getItem('episodes')));
    }
    function handleEpisodeRemove(item) {
        let episodeOriginList=JSON.parse(localStorage.getItem('episodes'))
        let index= episodeOriginList.findIndex((episode)=>episode.id===item.id);

        if (index > -1) {
            episodeOriginList.splice(index, 1);
          }
  
          localStorage.setItem('episodes',JSON.stringify(episodeOriginList));
          setEpisodeList(JSON.parse(localStorage.getItem('episodes')));
      }
    
    function handleAddTask() {
        let newEpisode={id:Math.random(),checked:false,name:episodeName};
        localStorage.setItem('episodes',JSON.stringify([...episodeList,newEpisode]));
        setEpisodeList(JSON.parse(localStorage.getItem('episodes')))
    }
    
    return (
      <div className={classes.list}>
        <TextField
            className={classes.field}
            variant="filled"
            onChange={(e)=> setEpisodeName(e.target.value)}
            value={episodeName}
            label='Enter episode name...' />
        <Button variant="contained" color="primary" className={classes.button} onClick={handleAddTask}>Add episode</Button>
        <List component="nav">
            {items}
         </List>
      </div>
    );
};


export default WatchList