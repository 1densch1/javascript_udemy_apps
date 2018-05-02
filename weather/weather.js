class Weather{
  constructor(city, state){
    this.apiKey = 'c878811e727a95d7';
    this.city = city;
    this.state = state;
  }
  // Fetch Weather from API
  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city,state){
    this.city = city;
    this.state = state;
  }

}