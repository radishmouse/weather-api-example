const cityForm = document.querySelector('.js-city-search');

const API = `http://api.openweathermap.org/data/2.5/`;

function forecastURL(cityName) {
    return `${API}forecast?q=${cityName}&APPID=${weatherAPIKey}`    
}

function getCityForecast(cityName) {    
    fetch(forecastURL(cityName))
        .then(r => r.json())
        .then((obj) => {
            console.log(obj);
        });
}

cityForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Don't send the form!!!
    const cityName = e.target.city.value;
    console.log(cityName);
    getCityForecast(cityName)
});





// Tip: copy/paste example data into your index.js
const example1 = {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200};
const example2 = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1576087200,
            "main": {
                "temp": 281.65,
                "feels_like": 275.65,
                "temp_min": 281.65,
                "temp_max": 283.03,
                "pressure": 1031,
                "sea_level": 1031,
                "grnd_level": 997,
                "humidity": 30,
                "temp_kf": -1.38
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 4.42,
                "deg": 348
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-11 18:00:00"
        },
        {
            "dt": 1576098000,
            "main": {
                "temp": 281.82,
                "feels_like": 276.49,
                "temp_min": 281.82,
                "temp_max": 282.85,
                "pressure": 1030,
                "sea_level": 1030,
                "grnd_level": 996,
                "humidity": 32,
                "temp_kf": -1.03
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.59,
                "deg": 346
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-11 21:00:00"
        },
        {
            "dt": 1576108800,
            "main": {
                "temp": 277.4,
                "feels_like": 272.95,
                "temp_min": 277.4,
                "temp_max": 278.09,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 998,
                "humidity": 49,
                "temp_kf": -0.69
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 2.55,
                "deg": 327
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-12 00:00:00"
        },
        {
            "dt": 1576119600,
            "main": {
                "temp": 277.51,
                "feels_like": 273.18,
                "temp_min": 277.51,
                "temp_max": 277.85,
                "pressure": 1033,
                "sea_level": 1033,
                "grnd_level": 998,
                "humidity": 49,
                "temp_kf": -0.34
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.39,
                "deg": 22
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-12 03:00:00"
        },
        {
            "dt": 1576130400,
            "main": {
                "temp": 277.19,
                "feels_like": 272.87,
                "temp_min": 277.19,
                "temp_max": 277.19,
                "pressure": 1033,
                "sea_level": 1033,
                "grnd_level": 999,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.73,
                "deg": 81
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-12 06:00:00"
        },
        {
            "dt": 1576141200,
            "main": {
                "temp": 277.08,
                "feels_like": 271.76,
                "temp_min": 277.08,
                "temp_max": 277.08,
                "pressure": 1033,
                "sea_level": 1033,
                "grnd_level": 998,
                "humidity": 53,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.9,
                "deg": 81
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-12 09:00:00"
        },
        {
            "dt": 1576152000,
            "main": {
                "temp": 276.23,
                "feels_like": 270.57,
                "temp_min": 276.23,
                "temp_max": 276.23,
                "pressure": 1034,
                "sea_level": 1034,
                "grnd_level": 1000,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.42,
                "deg": 88
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-12 12:00:00"
        },
        {
            "dt": 1576162800,
            "main": {
                "temp": 279.16,
                "feels_like": 272.39,
                "temp_min": 279.16,
                "temp_max": 279.16,
                "pressure": 1034,
                "sea_level": 1034,
                "grnd_level": 1000,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.99,
                "deg": 93
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-12 15:00:00"
        },
        {
            "dt": 1576173600,
            "main": {
                "temp": 282.91,
                "feels_like": 276.64,
                "temp_min": 282.91,
                "temp_max": 282.91,
                "pressure": 1032,
                "sea_level": 1032,
                "grnd_level": 998,
                "humidity": 39,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.46,
                "deg": 97
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-12 18:00:00"
        },
        {
            "dt": 1576184400,
            "main": {
                "temp": 282.79,
                "feels_like": 277.05,
                "temp_min": 282.79,
                "temp_max": 282.79,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 995,
                "humidity": 42,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 62
            },
            "wind": {
                "speed": 4.86,
                "deg": 95
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-12 21:00:00"
        },
        {
            "dt": 1576195200,
            "main": {
                "temp": 280.07,
                "feels_like": 274.65,
                "temp_min": 280.07,
                "temp_max": 280.07,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 995,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 81
            },
            "wind": {
                "speed": 4.7,
                "deg": 97
            },
            "rain": {
                "3h": 0.25
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-13 00:00:00"
        },
        {
            "dt": 1576206000,
            "main": {
                "temp": 278.23,
                "feels_like": 273.72,
                "temp_min": 278.23,
                "temp_max": 278.23,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 995,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.07,
                "deg": 99
            },
            "rain": {
                "3h": 1.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-13 03:00:00"
        },
        {
            "dt": 1576216800,
            "main": {
                "temp": 277.65,
                "feels_like": 272.82,
                "temp_min": 277.65,
                "temp_max": 277.65,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 993,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.63,
                "deg": 80
            },
            "rain": {
                "3h": 0.75
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-13 06:00:00"
        },
        {
            "dt": 1576227600,
            "main": {
                "temp": 277.32,
                "feels_like": 272.59,
                "temp_min": 277.32,
                "temp_max": 277.32,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 990,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.49,
                "deg": 84
            },
            "rain": {
                "3h": 0.75
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-13 09:00:00"
        },
        {
            "dt": 1576238400,
            "main": {
                "temp": 277.41,
                "feels_like": 273.45,
                "temp_min": 277.41,
                "temp_max": 277.41,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 989,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.45,
                "deg": 87
            },
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-13 12:00:00"
        },
        {
            "dt": 1576249200,
            "main": {
                "temp": 278.52,
                "feels_like": 274.54,
                "temp_min": 278.52,
                "temp_max": 278.52,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 988,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.76,
                "deg": 81
            },
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-13 15:00:00"
        },
        {
            "dt": 1576260000,
            "main": {
                "temp": 281.39,
                "feels_like": 278.02,
                "temp_min": 281.39,
                "temp_max": 281.39,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 985,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.46,
                "deg": 90
            },
            "rain": {
                "3h": 0.37
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-13 18:00:00"
        },
        {
            "dt": 1576270800,
            "main": {
                "temp": 280.22,
                "feels_like": 276.95,
                "temp_min": 280.22,
                "temp_max": 280.22,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 981,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.41,
                "deg": 82
            },
            "rain": {
                "3h": 0.69
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-13 21:00:00"
        },
        {
            "dt": 1576281600,
            "main": {
                "temp": 280.88,
                "feels_like": 277.53,
                "temp_min": 280.88,
                "temp_max": 280.88,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 980,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.78,
                "deg": 96
            },
            "rain": {
                "3h": 0.44
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-14 00:00:00"
        },
        {
            "dt": 1576292400,
            "main": {
                "temp": 281.99,
                "feels_like": 280.02,
                "temp_min": 281.99,
                "temp_max": 281.99,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 978,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 2.34,
                "deg": 118
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-14 03:00:00"
        },
        {
            "dt": 1576303200,
            "main": {
                "temp": 282.24,
                "feels_like": 281.13,
                "temp_min": 282.24,
                "temp_max": 282.24,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 976,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.25,
                "deg": 146
            },
            "rain": {
                "3h": 1.69
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-14 06:00:00"
        },
        {
            "dt": 1576314000,
            "main": {
                "temp": 283.38,
                "feels_like": 282.81,
                "temp_min": 283.38,
                "temp_max": 283.38,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 973,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 0.91,
                "deg": 127
            },
            "rain": {
                "3h": 1.69
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-14 09:00:00"
        },
        {
            "dt": 1576324800,
            "main": {
                "temp": 284.21,
                "feels_like": 283.5,
                "temp_min": 284.21,
                "temp_max": 284.21,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 973,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.44,
                "deg": 207
            },
            "rain": {
                "3h": 0.81
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-14 12:00:00"
        },
        {
            "dt": 1576335600,
            "main": {
                "temp": 285.6,
                "feels_like": 284.82,
                "temp_min": 285.6,
                "temp_max": 285.6,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 972,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.99,
                "deg": 241
            },
            "rain": {
                "3h": 0.81
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-14 15:00:00"
        },
        {
            "dt": 1576346400,
            "main": {
                "temp": 289.82,
                "feels_like": 286.63,
                "temp_min": 289.82,
                "temp_max": 289.82,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 971,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 5.18,
                "deg": 257
            },
            "rain": {
                "3h": 0.88
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-14 18:00:00"
        },
        {
            "dt": 1576357200,
            "main": {
                "temp": 288.61,
                "feels_like": 285.5,
                "temp_min": 288.61,
                "temp_max": 288.61,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 970,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 4.59,
                "deg": 256
            },
            "rain": {
                "3h": 0.44
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-14 21:00:00"
        },
        {
            "dt": 1576368000,
            "main": {
                "temp": 285.24,
                "feels_like": 281.49,
                "temp_min": 285.24,
                "temp_max": 285.24,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 973,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 5.09,
                "deg": 278
            },
            "rain": {
                "3h": 1
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-15 00:00:00"
        },
        {
            "dt": 1576378800,
            "main": {
                "temp": 281.66,
                "feels_like": 276.88,
                "temp_min": 281.66,
                "temp_max": 281.66,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 976,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 30
            },
            "wind": {
                "speed": 5.4,
                "deg": 296
            },
            "rain": {
                "3h": 0.19
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-15 03:00:00"
        },
        {
            "dt": 1576389600,
            "main": {
                "temp": 279.53,
                "feels_like": 274.51,
                "temp_min": 279.53,
                "temp_max": 279.53,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 979,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 23
            },
            "wind": {
                "speed": 5.17,
                "deg": 294
            },
            "rain": {
                "3h": 0.06
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-15 06:00:00"
        },
        {
            "dt": 1576400400,
            "main": {
                "temp": 279.56,
                "feels_like": 274.48,
                "temp_min": 279.56,
                "temp_max": 279.56,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 981,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 5.03,
                "deg": 309
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-15 09:00:00"
        },
        {
            "dt": 1576411200,
            "main": {
                "temp": 276.8,
                "feels_like": 272.98,
                "temp_min": 276.8,
                "temp_max": 276.8,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 984,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 46
            },
            "wind": {
                "speed": 2.92,
                "deg": 313
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-15 12:00:00"
        },
        {
            "dt": 1576422000,
            "main": {
                "temp": 279.63,
                "feels_like": 276,
                "temp_min": 279.63,
                "temp_max": 279.63,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 986,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.57,
                "deg": 328
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-15 15:00:00"
        },
        {
            "dt": 1576432800,
            "main": {
                "temp": 285.85,
                "feels_like": 282.7,
                "temp_min": 285.85,
                "temp_max": 285.85,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 986,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.62,
                "deg": 308
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-15 18:00:00"
        },
        {
            "dt": 1576443600,
            "main": {
                "temp": 286.53,
                "feels_like": 283.83,
                "temp_min": 286.53,
                "temp_max": 286.53,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 986,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.03,
                "deg": 251
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-15 21:00:00"
        },
        {
            "dt": 1576454400,
            "main": {
                "temp": 281.44,
                "feels_like": 278.48,
                "temp_min": 281.44,
                "temp_max": 281.44,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 987,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.5,
                "deg": 187
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-16 00:00:00"
        },
        {
            "dt": 1576465200,
            "main": {
                "temp": 280.02,
                "feels_like": 276.9,
                "temp_min": 280.02,
                "temp_max": 280.02,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 988,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.87,
                "deg": 180
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-16 03:00:00"
        },
        {
            "dt": 1576476000,
            "main": {
                "temp": 279.17,
                "feels_like": 276.22,
                "temp_min": 279.17,
                "temp_max": 279.17,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 988,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.67,
                "deg": 166
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-16 06:00:00"
        },
        {
            "dt": 1576486800,
            "main": {
                "temp": 278.67,
                "feels_like": 275.75,
                "temp_min": 278.67,
                "temp_max": 278.67,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 988,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.61,
                "deg": 149
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-16 09:00:00"
        },
        {
            "dt": 1576497600,
            "main": {
                "temp": 278.2,
                "feels_like": 275.09,
                "temp_min": 278.2,
                "temp_max": 278.2,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 989,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.9,
                "deg": 123
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2019-12-16 12:00:00"
        },
        {
            "dt": 1576508400,
            "main": {
                "temp": 282.88,
                "feels_like": 279.49,
                "temp_min": 282.88,
                "temp_max": 282.88,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 990,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.76,
                "deg": 143
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2019-12-16 15:00:00"
        }
    ],
    "city": {
        "id": 4180439,
        "name": "Atlanta",
        "coord": {
            "lat": 33.7491,
            "lon": -84.3902
        },
        "country": "US",
        "population": 420003,
        "timezone": -18000,
        "sunrise": 1576067534,
        "sunset": 1576103370
    }
}

// Write functions that extract useful data
function weatherFromObject(obj) {
    return obj.weather[0].main;
}

function renderWeather(weather) {
    const el = document.createElement('div');
    el.textContent = weather;
    document.body.appendChild(el);
}

function windSpeedFromObj(obj) {
    return obj.list[0].wind.speed;
}