import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    filter: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    item: {
        margin: '50px 20px 0 20px',
        backgroundColor: '#fff',
        borderRadius: '5%',
        width: 150
    },
    button: {
        margin: '50px 20px 0 20px',
        width: 150,
    }
}));

export default useStyles;