import perfectDay from "../assets/icons/perfect-day.svg"

function CityComponent({setCity, fetchWeather}) {
    return (
        <>
            <img src={perfectDay} className="WelcomeLogo"></img>
            <span className="ChooseCityLabel">Find Weather of your city</span>
            <form className="SearchBox" onSubmit={fetchWeather}>
                <input placeholder="City" onChange={(event) => setCity(event.target.value)}></input>
                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default CityComponent;