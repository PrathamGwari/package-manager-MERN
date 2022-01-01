import {
  Container,
  Grid,
  makeStyles,
  alpha,
  TextField,
  Button,
} from "@material-ui/core";
import Sidebar from "../Sidebar";
import { React, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.main,
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    marginLeft: theme.spacing(0),
    maxWidth: "12800px",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "white",
    width: "70%",
    marginLeft: "50%",
    transform: "translate(-50%,0%)",
    padding: theme.spacing(2),
    "& *": {
      flex: "1 1 100%",
    },
    marginBottom: theme.spacing(2),
  },
  twoContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    columnGap: theme.spacing(1),
  },

  singleContainer: {
    width: "100%",
    display: "inline-block",
    "& *": {
      width: "99%",
      marginTop: ".3rem",
      marginBottom: ".3rem",
    },
  },
  createBtn: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.9),
    },
    marginTop:theme.spacing(2)
  },
}));

function CreateParcel(props) {
  const classes = useStyles();
  const {userCredentials} = props;
  const [parcelData, setParcelData] = useState({
    email: userCredentials.email,
    parcelInfo: "",
    parcelCost: "",
    senderName: "",
    receiverName: "",
    senderAddress: "",
    receiverAddress: "",
    senderPhoneNumber: "",
    receiverPhoneNumber: "",
    startLocation: "",
    endLocation: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(parcelData)
    const res = await axios.post(
      "https://parcel-management-app.herokuapp.com/api/parcel/createparcel",
      parcelData
    );
    console.log(res);
    document.forms["parcelInfo"].reset();
  };
  const handleChange = (e) => {
    const newData = { ...parcelData };
    newData[e.target.id] = e.target.value;
    setParcelData(newData);
    console.log(parcelData);
  };
  return (
    <Container className={classes.container}>
      <Grid container>
        {/* Sidebar */}
        <Grid item xs={2}>
          <Sidebar></Sidebar>
        </Grid>

        {/* Center Panel */}
        <Grid item xs={10}>
          <div className={classes.rightContainer}>
            <form name="parcelInfo" className={classes.form}>

              <div className={classes.twoContainer}>
                <TextField
                  required="true"
                  id="senderName"
                  label="Sender's Name"
                  variant="outlined"
                  className="input"
                  onChange={handleChange}
                />
                <TextField
                  id="receiverName"
                  label="Receiver's Name"
                  variant="outlined"
                  className="input"
                  onChange={handleChange}
                />
              </div>

              <div className={classes.singleContainer}>
                <TextField
                  id="senderAddress"
                  label="Sender's Address"
                  variant="outlined"
                  className="inputFull"
                  onChange={handleChange}
                />
              </div>
              <div className={classes.singleContainer}>
                <TextField
                  id="receiverAddress"
                  label="Receiver's Address"
                  variant="outlined"
                  className="inputFull"
                  onChange={handleChange}
                />
              </div>

              <div className={classes.twoContainer}>
                <TextField
                  id="senderPhoneNumber"
                  label="Sender's Phone No."
                  variant="outlined"
                  className="input"
                  onChange={handleChange}
                />
                <TextField
                  id="receiverPhoneNumber"
                  label="Receiver's Phone No."
                  variant="outlined"
                  className="input"
                  onChange={handleChange}
                />
              </div>

              <div className={classes.singleContainer}>
                <TextField
                  id="startLocation"
                  label="Starting Location"
                  variant="outlined"
                  className="input"
                  onChange={handleChange}
                />
              </div>
              <div className={classes.singleContainer}>
                <TextField
                  id="endLocation"
                  label="Ending Location"
                  variant="outlined"
                  className="input"
                  onChange={handleChange}
                />
              </div>

              <div className={classes.twoContainer}>
                <TextField
                  id="parcelInfo"
                  label="Parcel Info"
                  variant="outlined"
                  className="inputFull"
                  onChange={handleChange}
                />
                <TextField
                  id="parcelCost"
                  label="Parcel Cost"
                  variant="outlined"
                  className="inputFull"
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                onClick={handleClick}
                className={classes.createBtn}
                variant="contained"
              >
                CREATE PARCEL
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state)=>{
  return{
    userCredentials: state.userCredentials
  }
}

export default connect(mapStateToProps, null)(CreateParcel);
