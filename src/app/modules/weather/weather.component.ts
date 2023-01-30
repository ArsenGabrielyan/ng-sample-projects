import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs';
import {HttpService} from "./services/http.service";
import {OtherFeaturesService} from "./services/other-features.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weather_input = "";
  weather_city = "";
  weatherShown = false;
  weather_temp = 0;
  weather_windspd = 0;
  weather_humid = 0;
  weather_code = 0;
  current_weather!:string;
  constructor(private httpReq: HttpService, private other: OtherFeaturesService){}
  ngOnInit(): void {
    this.weatherShown = false;
    window.onkeydown = (e)=>{
      if(e.key === "Enter") this.searchWeather();
    }
  }
  getWeather(val:any){
    this.httpReq.getPlaceFrom(val.latitude,val.longitude).pipe(map((place:any)=>this.getPlace(place))).subscribe();
    const {temperature_120m,windspeed_120m,relativehumidity_2m,weathercode} = val.hourly;
    this.weatherShown = true;
    this.weather_temp = temperature_120m[temperature_120m.length-1];
    this.weather_windspd = windspeed_120m[windspeed_120m.length-1];
    this.weather_humid = relativehumidity_2m[relativehumidity_2m.length-1];
    this.weather_code = weathercode[weathercode.length-1];
    this.current_weather = this.other.getWeatherFromCode(this.weather_code)!;
  }
  searchWeather(){
    if(this.weather_input.trim() === ""){
      alert("Enter City or Location");
      this.weather_input = "";
    } else this.httpReq.getWeatherDetails(this.weather_input).subscribe((val:any)=>val.pipe(map((res:any)=>this.getWeather(res)),finalize(()=>this.weather_input="")).subscribe());
  }
  showWeatherFromPosition(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos:GeolocationPosition)=>{
        this.httpReq.getPlaceFrom(pos.coords.latitude,pos.coords.longitude).pipe(map((val:any)=>this.getPlace(val))).subscribe();
        this.httpReq.getWeatherFrom(pos).pipe(map(val=>this.getWeather(val))).subscribe()
      })
    }
  }
  getPlace(place:any){
    const {city,village,town,municipality, country, state, hamlet} = place.address, mentionedCommunity = city || village || town || municipality || state || hamlet;
    this.weather_city = `${mentionedCommunity || ""}${mentionedCommunity ? ", " : ""} ${country}`}
}