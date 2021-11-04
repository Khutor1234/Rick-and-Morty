import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    header: {
        background: 'rgb(0,0,0)',
    },
    label: {
        flexGrow: 1,
        color: '#fff'
    },
    link: {
        display: 'flex',
        fontSize: 20,
        alignItems: 'center'
        
    },
}));

export default useStyles;