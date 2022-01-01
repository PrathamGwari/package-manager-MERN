import {React, useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import {makeStyles, TextField, Grid, Typography, alpha, Button} from '@material-ui/core'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'

const useStyles = makeStyles(theme=>({
    container:{
        padding: theme.spacing(4),
        paddingTop: theme.spacing(15),
        backgroundColor: theme.palette.background.main,
        height: "78vh",
    },
    formContainer:{
        borderRadius: "1rem",
        backgroundColor: "white",
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        rowGap: theme.spacing(2),
        width: "50%",
        marginLeft: "50%",
        transform: "translate(-50%, 0%)",
    },
    credInput:{
        width: "100%",
    },
    animation:{
        display: "none",
        [theme.breakpoints.up('sm')]:{
            display: "inline",
        },
    },
    loginBtn:{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover":{
            backgroundColor: alpha(theme.palette.primary.main, 0.9)
        },
    },
    registerBtn:{
        width: "100%",
        backgroundColor: "#49af41",
        color: "white",
        "&:hover":{
            backgroundColor: alpha(theme.palette.primary.main, 0.9)
        },
    }
}))

function Register(props) {
    const classes = useStyles();
    const animationContainer = useRef(null)
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: ""
    })

    useEffect(()=>{
        lottie.loadAnimation({
            container: animationContainer.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../animations/box2.json')
        })
    }, [])

    const handleClick = async (e)=>{
        e.preventDefault();
        console.log(credentials);
        try{
            const res = await axios.post('https://parcel-management-app.herokuapp.com/api/auth/register', credentials)
            console.log(res);
            props.changeUserCredentials(credentials);
            props.changeIsAuthenticated(true);
            console.log(props)
        } catch(err){
            alert(err);
        }
    }
    const handleChange = (e)=>{
        const newCredentials = {...credentials}
        newCredentials[e.target.id] = e.target.value
        setCredentials(newCredentials)
    }
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={4} sm={4} ref={animationContainer} className={classes.animation}></Grid>

                <Grid item xs={12} sm={8} md={8}>
                    <form className={classes.formContainer}>
                        <Typography variant='h4' gutterBottom>
                            Register
                        </Typography>
                        <div><TextField type="text" id='username' className={classes.credInput} label="Username" variant="outlined" onChange={handleChange}/></div>
                        <div><TextField type="email" id='email' className={classes.credInput} label="Email" variant="outlined" onChange={handleChange}/></div>
                        <div><TextField id='password' className={classes.credInput} label="Password" variant="outlined" onChange={handleChange}/></div>
                        <Button type="submit" className={classes.loginBtn} variant="contained" onClick={handleClick}>REGISTER</Button>
                        <Link to="/login" style={{textDecoration: "none"}}><Button className={classes.registerBtn} variant="contained">LOGIN</Button></Link>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToState = (dispatch)=>{
    return{
        changeUserCredentials : (newCredentials)=>{ dispatch({type:'REGISTER', payload: newCredentials}) },
        changeIsAuthenticated : (val)=>{ dispatch({type: 'CHANGE_IS_AUTHENTICATED', payload: val}) }
    }
}

export default connect(null, mapDispatchToState)(Register)
