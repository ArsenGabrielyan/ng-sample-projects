import { Component, OnInit, inject } from '@angular/core';
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
  weatherShown = false;
  weatherStats = {
    city:'',
    temp:0,
    windspd:0,
    humid:0,
    code:0
  }
  current_weather!:string;
  private httpReq = inject(HttpService);
  private other = inject(OtherFeaturesService)
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
    this.weatherStats.temp = temperature_120m[temperature_120m.length-1];
    this.weatherStats.windspd = windspeed_120m[windspeed_120m.length-1];
    this.weatherStats.humid = relativehumidity_2m[relativehumidity_2m.length-1];
    this.weatherStats.code = weathercode[weathercode.length-1];
    this.current_weather = this.other.getWeatherFromCode(this.weatherStats.code)!;
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
    this.weatherStats.city = place.display_name.split(',').slice(2).join()
  }
}