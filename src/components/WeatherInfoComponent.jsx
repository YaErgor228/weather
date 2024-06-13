import { WeatherInfoIcons } from "../Constants";

function WeatherInfoComponent({name, value}) {
    console.log(value, "value")
    return (
        <div className="InfoContainer">
            <img className="InfoIcon" src={WeatherInfoIcons[name]}></img>
            <span className="InfoLabel">
                {value}
                <span>
                    {name}
                </span>
            </span>
        </div>
    )
}

export default WeatherInfoComponent;