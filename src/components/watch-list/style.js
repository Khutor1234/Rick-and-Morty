import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    list: {
        width: 300,
        margin: '0 auto',
        paddingTop: 50
    },
    field: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '5%',
    },
    button: {
        width: '100%',
        margin: '20px 0'
    },
    text: {
        color: '#fff'
    }
}));

export default useStyles;