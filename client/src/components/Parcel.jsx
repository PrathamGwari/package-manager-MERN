import {makeStyles } from '@material-ui/styles'
import {alpha, Card, CardContent, Typography} from '@material-ui/core'
import {React} from 'react'


const useStyles = makeStyles(theme=>({
    card:{
        height: "fit-content",
        padding: ".1rem",
        width: "fit-content",
        margin: ".5rem",
        '&:hover': {
            background: alpha("rgb(255,255,255)", 0.95),        
        }
    }
}))

function Parcel({parcelInfo, parcelCost, senderName, receiverName, senderAddress, receiverAddress, senderPhoneNumber, receiverPhoneNumber, startLocation, endLocation}) {
    const classes = useStyles();
    return (
        <>
            <Card sx={{ minWidth: 275 }} className={classes.card}>
                <CardContent>
                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Parcel Info: </b> {parcelInfo}
                    </Typography>

                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Parcel Cost: </b> ₹{parcelCost}
                    </Typography>
                    
                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Sender Name: </b> {senderName}
                    </Typography>
                    
                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Receiver Name: </b> {receiverName}
                    </Typography>

                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Sender Address: </b> {senderAddress}
                    </Typography>

                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Receiver Address: </b> {receiverAddress}
                    </Typography>

                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Sender's Phone Number: </b> {senderPhoneNumber}
                    </Typography>

                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Receiver's Phone Number: </b> {receiverPhoneNumber}
                    </Typography>

                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Starting Location: </b> {startLocation}
                    </Typography>

                    <Typography sx={{ fontSize: 10 }} gutterBottom>
                        <b>Ending Location: </b> {endLocation}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default Parcel