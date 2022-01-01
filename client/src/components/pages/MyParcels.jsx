import {Container, Grid, makeStyles, Typography} from '@material-ui/core'
import Sidebar from '../Sidebar';
import { connect } from 'react-redux';
import Parcel from '../Parcel';
import axios from 'axios'
import {useLocation} from 'react-router'
import { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  container:{
    backgroundColor: theme.palette.background.main,
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    maxWidth: "12800px",
  },
  cardsContainer: {
    justifyContent: "center",
    color: "white",
    paddingTop: theme.spacing(10),
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    padding: "0rem",
    marginTop: "2rem",
    justifyContent: "center"
  },
}))

function MyParcels(props) {
  const classes = useStyles();
  const {myParcels} = props;
  const {search} = useLocation();

  useEffect(()=>{
      const fetch = async ()=>{
          const res = await axios.get('https://parcel-management-app.herokuapp.com/api/parcel/' + search);
          console.log(res.data);
          props.changeMyParcels(res.data);
      }
      fetch()
  },[])
  return (
    <Container className={classes.container}>
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={2}>
          <Sidebar></Sidebar>
        </Grid>

        {/* Center Panel */}
        <Grid item xs={10} className={classes.cardsContainer}>
          {myParcels.length <= 0 ? <h4>NO PARCELS CREATED</h4> :  <div></div>}
          {myParcels.map((parcel)=>{
            return <Parcel
              key={parcel.id}
              parcelInfo = {parcel.parcelInfo}
              parcelCost = {parcel.parcelCost}
              senderName={parcel.senderName}
              receiverName={parcel.receiverName}
              senderAddress={parcel.senderAddress}
              receiverAddress={parcel.receiverAddress}
              senderPhoneNumber={parcel.senderPhoneNumber}
              receiverPhoneNumber={parcel.receiverPhoneNumber}
              startLocation={parcel.startLocation}
              endLocation={parcel.endLocation}
            />
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
const mapStateToProps = (state)=>{
  return {
      myParcels: state.myParcels
  }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      changeMyParcels: (data)=>{ dispatch({type: 'CHANGE_MY_PARCELS', payload: data}) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyParcels);