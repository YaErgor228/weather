import './index.css';
import {useState} from 'react';
import CityComponent from './components/CityComponent.jsx';
import WeatherComponent from './components/WeatherComponent.jsx';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`);
    const data = await response.json();
    setWeather(data)
  }
  return (
    <div className="App">
      <div className='Container'>
        <span className='AppLabel'>
          React Weather App
        </span>
        {( city && weather ? <WeatherComponent weather={weather}/> : <CityComponent setCity={setCity} fetchWeather={fetchWeather}/> )}
      </div>
    </div>
  );
}

export default App;
