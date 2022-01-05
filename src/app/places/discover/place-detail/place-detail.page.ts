import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute, private navCtrl: NavController,
    private placeService: PlacesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/discover');
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace(){
    //this.navCtrl.navigateBack('/places/discover');
    this.modalCtrl.create({component: CreateBookingComponent, componentProps: {selectedPlace: this.place}}).then(el =>{
      el.present();
      return el.onDidDismiss();
    }).then(resultData=>{
      console.log(resultData.data);
      console.log(resultData.role);
      if(resultData.role==='confirm'){
        console.log('Booked!!!!');
      }
    });
  }

}
