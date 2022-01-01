import {makeStyles, Switch} from '@material-ui/core'
import Navbar from './components/Navbar';
import CreateParcel from './components/pages/CreateParcel';
import MyParcels from './components/pages/MyParcels';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

import ProtectedRoute from './components/ProtectedRoute'
import ProtectedLogin from './components/ProtectedLogin'
import ProtectedRegister from './components/ProtectedRegister'

import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'

const useStyles = makeStyles(theme => ({

}))

function App(props) {
  const classes = useStyles();
  const {isCreateParcelSelected} = props;
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><Login/></ProtectedRoute>}/>
          <Route exact path="/login" element={<ProtectedLogin><Login/></ProtectedLogin>}/>
          <Route exact path="/register" element={<ProtectedRegister><Register/></ProtectedRegister>}/>
          <Route path="/createparcel/" element={<ProtectedRoute><CreateParcel/></ProtectedRoute>}/>
          <Route path="/myparcels/" element={<ProtectedRoute><MyParcels/></ProtectedRoute>}/>
        </Routes>
      </Router>
      {/* {isCreateParcelSelected === true ? <CreateParcel/> : <MyParcels/>} */}
      
    </>
  );
}

const mapStateToProps = (state)=>{
  return{
    isCreateParcelSelected: state.isCreateParcelSelected
  }
}

export default connect(mapStateToProps, null)(App);
