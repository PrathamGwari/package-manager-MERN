import {Container, makeStyles, Typography} from '@material-ui/core'
import {connect} from "react-redux"
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  item:{
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    cursor: "pointer",
    [theme.breakpoints.down('md')]:{
      justifyContent: "center",
    },
  },
  activeItem:{
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    [theme.breakpoints.down('md')]:{
      justifyContent: "center",
    },
  },

  icon:{
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    justifyContent: "center",
    [theme.breakpoints.up('md')]:{
      display: "inline-block"
    }
  },
  
  container:{
    position: "sticky",
    top: 0,
    height: "100vh",
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
    color: "white"
  },
  text:{
    display: "inline-block",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('md')]:{
      display: "none"
    },
    [theme.breakpoints.up('md')]:{
      display: "inline-block"
    }
  }
}))

function Sidebar(props) {
  const classes = useStyles();
  const {isCreateParcelSelected, userCredentials} = props;
  console.log(props);

  return (
    <Container className={classes.container}>
      {/* Create Package */}
      <Link to={`/createparcel/?email=${userCredentials.email}`} style={{textDecoration: "none", color: "white"}}>
        <div className={isCreateParcelSelected === true ? classes.activeItem : classes.item} onClick={()=> props.changeCreateParcelSelected(true)}>
          <div className={classes.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
            </svg>
          </div>
          <Typography className={classes.text}>Create Parcel</Typography>
        </div>
      </Link>

      {/* My Packages */}
      <Link to={`/myparcels/?email=${userCredentials.email}`} style={{textDecoration: "none", color: "white"}}>
        <div className={isCreateParcelSelected === true ? classes.item : classes.activeItem} onClick={()=> props.changeCreateParcelSelected(false)}>
          <div className={classes.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
            </svg>
          </div>
          <Typography className={classes.text}>My Parcels</Typography>
        </div>
      </Link>
    </Container>
  );
}

const mapStateToProps = (state)=>{
  return {
    isCreateParcelSelected: state.isCreateParcelSelected,
    userCredentials: state.userCredentials
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeCreateParcelSelected: (val)=>{ dispatch({type:'CHANGE_CREATE_PARCEL_SELECTED', payload: val}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);