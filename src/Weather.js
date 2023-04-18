// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLocation, setWeatherData } from './redux/WeatherSlice';
// import axios from 'axios';

// function WeatherApp() {
//   const dispatch = useDispatch();
//   const location = useSelector(state => state.weather.location);
//   const [weatherData, setData] = useState({});

//   const handleLocationChange = e => {
//     dispatch(setLocation(e.target.value));
//   };

//   useEffect(() => {
//     if (location) {
//       axios
//         .get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5fe20f714159872a9cdce81d8690039d`)
//         .then(res => {
//           setData(res.data);
//           dispatch(setWeatherData(res.data));
//         });
//     }
//   }, [location, dispatch]);

//   return (
//     <div>
//       <h1>Weather App</h1>
//       <input type="text" onChange={handleLocationChange} />
//       {location && (
//         <div>
//           <h2>Weather in {location}:</h2>
//           <p>Temperature: {weatherData.main ? weatherData.main.temp : ''}</p>
//           <p>Pressure: {weatherData.main ? weatherData.main.pressure : ''}</p>
//           <p>Humidity: {weatherData.main ? weatherData.main.humidity : ''}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default WeatherApp;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const { data } = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              q: 'London,UK',
              appid: '5fe20f714159872a9cdce81d8690039d',
            },
          }
        );
        setWeatherData(data);
      } catch (e) {
        setError(e);
      }
    };
    fetchWeatherData();
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>City: {weatherData.name}</p>
      <p>Temperature: {weatherData.main.temp}</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherApp;

