import ReactWeather, { useOpenWeather } from 'react-open-weather';
import './App.css';

function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '6803c5d13bb45140b755e7037cf3c78c',
    lat: '34.0522',
    lon: '-118.2437',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  return (
    <div className='App'>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang='en'
        locationLabel='Los Angeles, CA'
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;