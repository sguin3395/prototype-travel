import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;
  constructor(private route: ActivatedRoute, private placesService: PlacesService,
    private navCtrl: NavController) { }

  ngOnInit() {
    console.log(this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/offers');
        return;
        // console.log('no place Id');
      }else{
        this.place = this.placesService.getPlace(paramMap.get('placeId'));
      }
    })
    );
  }

}
