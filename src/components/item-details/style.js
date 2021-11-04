import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		top: `50%`,
		left: `50%`,
		transform: `translate(-50%, -50%)`,
		width: 600,
        height: 300,
		backgroundColor: '#fff',
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
    header: {
        textAlign: 'center',
        width: 270
    }
}));


export default useStyles;