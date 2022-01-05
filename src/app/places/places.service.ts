/* eslint-disable @typescript-eslint/prefer-for-of */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inewplace } from './newplace.model';
import { Place } from './place.model';
import { category } from './category.model';
import { tap, switchMap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private newPlaces: Inewplace[]=[];
  private availablePlaces: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'Just in the heart of New York City',
      'https://www.jamesedition.com/stories/wp-content/uploads/2020/12/1_Israel.jpg',
      149.99,
      {size: '10Xl'},
      [
       new category(
          'this',
          24
        ),
        new category(
          'that',
          25
        ),
        new category(
          'them',
          62
        )
      ]
    ),
    new Place('p2',
      'L\Amour Dotours',
      'One of the best Romantic stays in Paris!',
      'https://images.spot.im/v1/production/dosgmd0iebzv4fjhppxe',
      189.99,
      {size: '10Xl'},
      [
       new category(
          'this',
          24
        ),
        new category(
          'that',
          25
        ),
        new category(
          'them',
          62
        )
      ]),
    new Place('p3',
      'Hogwarts Castle',
      'Not your usual stays! Only for non-muggles',
      'https://images.dailyhive.com/20200414144211/shutterstock_550323016.jpg',
      1089.99,
      {size: '10Xl'},
      [
       new category(
          'this',
          24
        ),
        new category(
          'that',
          25
        ),
        new category(
          'them',
          62
        )
      ]),

  ];
  constructor(private http: HttpClient) { }

  get places(){
    return [...this.availablePlaces];
  }

  getPlace(id: string){
    return this.places.find(p=>p.id===id);
  }

  onSendData(places: Place[]){
    this.http.post('https://test-base-ab15b-default-rtdb.firebaseio.com/places.json',places)
    .subscribe(responseData=>{
      console.log(responseData);
    });
  }

  onFetchPlaces(){
    this.http.get('https://test-base-ab15b-default-rtdb.firebaseio.com/places.json')
    .pipe(
      map( res => {
        const postsArray = [];
        for( const key in res){
          if(res.hasOwnProperty(key)){
            postsArray.push(...res[key]);
          }
        }
        return postsArray;
      })
    )
    .subscribe(responseData =>{
      // console.log(responseData);
      for(let i=0;i<responseData.length;i++){
        const obj: Inewplace = {
          placeId: responseData[i].id,
          placeName: responseData[i].title,
          price: responseData[i].price,
          combination: {
            size: responseData[i].combination.size
          },
          categories: responseData[i].categories
        };
        this.newPlaces.push(obj);
      }
      console.log(this.newPlaces);
    });
  }

}

