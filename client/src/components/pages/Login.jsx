import {React, useEffect, useRef, useState} from 'react'
import lottie from 'lottie-web'
import {makeStyles, TextField, Grid, Typography, alpha, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

const useStyles = makeStyles(theme=>({
    container:{
        padding: theme.spacing(4),
        paddingTop: theme.spacing(15),
        backgroundColor: theme.palette.background.main,
        height: "75vh",
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

function Login(props) {
    const classes = useStyles();
    const animationContainer = useRef(null)
    const [inputCredentials, setInputCredentials] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleClick = async ()=>{
        console.log(inputCredentials)
        try{
            const res = await axios.post('https://parcel-management-app.herokuapp.com/api/auth/login', inputCredentials)
            console.log(res);
            props.changeIsAuthenticated(true)
            const userRes = await axios.get(`https://parcel-management-app.herokuapp.com/api/auth/?email=${inputCredentials.email}`)
            inputCredentials.username = userRes.data[0].username
            props.changeUserCredentials(inputCredentials)
        } catch(err){
            alert("Wrong Credentials or you haven't registered");
        }
    }

    const handleChange = (e)=>{
        const currentCredentials = {...inputCredentials}
        currentCredentials[e.target.id] = e.target.value
        setInputCredentials(currentCredentials)
    }

    useEffect(()=>{
        lottie.loadAnimation({
            container: animationContainer.current,
            render: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../animations/box2.json')
        })
    }, [])
    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={4} sm={4} ref={animationContainer} className={classes.animation}></Grid>

                <Grid item xs={12} sm={8} md={8}>
                    <form className={classes.formContainer}>
                        <Typography variant='h4' color="text.secondary" gutterBottom>
                            Login
                        </Typography>
                        <div><TextField type="email" id='email' className={classes.credInput} label="Email" variant="outlined" onChange={handleChange}/></div>
                        <div><TextField type="password" id='password' className={classes.credInput} label="Password" variant="outlined" onChange={handleChange}/></div>
                        <Button onClick={handleClick} className={classes.loginBtn} variant="contained">LOGIN</Button>
                        <Link to="/register" style={{textDecoration: "none"}}><Button className={classes.registerBtn} variant="contained">REGISTER</Button></Link>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        changeIsAuthenticated: (val)=>{ dispatch({type:'CHANGE_IS_AUTHENTICATED', payload: val}) },
        changeUserCredentials: (newCredentials)=>{ dispatch({type:"LOGIN", payload: newCredentials}) }
    }
}

export default connect(null, mapDispatchToProps)(Login)
