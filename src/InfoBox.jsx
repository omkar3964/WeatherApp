import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"


export default function InfoBox({ info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1494007485290-ce668e189d92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className='InfoBox'>
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"> {info.city}</Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'} >
                            <div><p>Tempreature : {info.temp}&deg;C</p></div>
                            <div><p>Humidity : {info.humidity}</p></div>
                            <div><p>Min temp : {info.tempMin}&deg;C</p></div>
                            <div><p>Max temp : {info.tempMax}&deg;C</p></div>
                            <div>The weather can be describe as<u><i> {info.weather}</i></u> and feels like {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}