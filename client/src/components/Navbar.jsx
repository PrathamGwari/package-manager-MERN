import {alpha, AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core'
import { connect } from 'react-redux';
import './components.css'

const useStyles = makeStyles(theme => ({
    toolbar:{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.main
    },
    logoutBtn:{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover":{
            backgroundColor: alpha(theme.palette.primary.main, 0.9)
        }
    }
}))

function Navbar(props) {
  const {isAuthenticated, userCredentials} = props;
  const classes = useStyles();
  const handleClick = ()=>{
    props.changeAuthStatus(false);
    props.changeIsCreateParselSelected(true);
  }
  console.log(userCredentials)
  return (
    <>
      <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
              <img src="https://cellartech.netlify.app/static/media/cellarTech.7569bd9e.png" className='logo' width="120rem" alt=" Cellar Tech Logo" />
              {isAuthenticated && <Typography variant="h6">{`Hello, ${userCredentials.username}`}</Typography>}
              {isAuthenticated && <Button className={classes.logoutBtn} variant='contained' onClick={handleClick}>LOGOUT</Button>}
          </Toolbar>
      </AppBar>
    </>
  );
}

const mapStateToProps = (state)=>{
  return {
    isAuthenticated: state.isAuthenticated,
    userCredentials: state.userCredentials
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeAuthStatus : (val)=>{ dispatch({type: 'CHANGE_IS_AUTHENTICATED', payload: val})},
    changeIsCreateParselSelected: (val)=>{ dispatch({type: 'CHANGE_CREATE_PARCEL_SELECTED', payload: val}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)