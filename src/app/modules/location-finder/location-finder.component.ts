import { Component, OnInit, inject } from '@angular/core';
import {Feature, Map} from "ol"
import { useGeographic } from 'ol/proj';
import { HttpService } from './services/http.service';
import { map } from 'rxjs';
import { View } from "ol";
import { FullScreen, Zoom, } from "ol/control";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Point } from 'ol/geom';

@Component({
  selector: 'app-location-finder',
  templateUrl: './location-finder.component.html',
  styleUrls: ['./location-finder.component.scss']
})
export class LocationFinderComponent {
  map!: Map;
  placeName = "Armenia"
  lon = 45;
  lat = 40.5;
  private httpService = inject(HttpService)
  ngOnInit(): void {
    useGeographic();
    this.map = new Map({
      controls: [
        new Zoom({
          className: "zoom-control",
          zoomInLabel: "+",
          zoomOutLabel: "-"
        }),
        new FullScreen({
          className: "full-screen-btn"
        })
      ],
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: "map",
      view: new View({
        center: [45,40.5],
        zoom: 8, maxZoom: 20,
      })
    });
    this.map.on("click", e=>{
      const pixel = e.pixel, cords = this.map.getCoordinateFromPixel(pixel);
      const lat = cords[1], lon = cords[0];
      this.lat = lat;
      this.lon = lon;
      const markers = new VectorLayer({
        source: new VectorSource({
          features: [new Feature(new Point([this.lon,this.lat]))]
        }),
        style: {
          "circle-radius": 9,
          "circle-fill-color": "#0092ff"
        }
      })
      this.map.addLayer(markers);
      this.httpService.getLocation(lon,lat).pipe(map(loc=>this.placeName = loc.display_name ? loc.display_name : "Invalid Location")).subscribe();
    })
  }
}
