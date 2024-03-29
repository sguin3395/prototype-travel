import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];
  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces=this.placesService.places;
    console.log(this.loadedPlaces);
    // console.log(this.loadedPlaces);
  }

  onSendPlaces(){
    this.placesService.onSendData(this.loadedPlaces);
  }

  onFetchNewPlaces(){
    this.placesService.onFetchPlaces();
  }

}
