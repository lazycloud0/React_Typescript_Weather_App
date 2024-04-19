Feel free to delete this and start from scratch.

Component Tree

MVP 1
App
├── SearchBar
│ ├── InputField
│ └── SearchButton
└── WeatherDisplay
├── CurrentWeather

MVP 2
App
├── SearchBar
│ ├── InputField
│ └── SearchButton
└── WeatherDisplay
├── CurrentWeather
│ ├── WeatherIcon
│ └── WeatherInfo

MVP 3
App
├── SearchBar
│ ├── InputField
│ └── SearchButton
└── WeatherDisplay
├── CurrentWeather
│ ├── WeatherIcon
│ └── WeatherInfo
└── Forecast
├── ForecastDay
│ ├── WeatherIcon
│ └── WeatherInfo

Plan: MVP 1

1. Define MVPs
2. Create component tree diagram for MVP1 in Mermaid
3. Setup for Vite + React
4. Build basic React Components

- big container
- container for weather info
- container for search bar
  - input field
  - search button

5. Define states and event handlers for each component
   - button: onClick handleFetch
   - input :String onChange
6. Error handling
7. Test
