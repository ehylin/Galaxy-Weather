import axios from '../lib/axios';

// Function to get latitude and longitude of the city
export async function getLatLon(city, apiKey) {
    const url = `/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    const { data } = await axios.get(url);
    return data[0];
}

// Function to get weather using latitude and longitude
export async function getWeather(lat, lon, apiKey) {
    const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const { data } = await axios.get(url);
    return data;
}
