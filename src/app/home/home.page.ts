/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { iFilter } from '../app.model';
import { InaiModalPage } from './inai-modal/inai-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: string[] = [];
  form: iFilter[] = [];
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  isItemAvailable: boolean = false;

  constructor(private modalCtrl: ModalController) {
    this.getFilters();
  }

  arr = ["Guide", "Tim", "Thomas", "Nimyle"];

  initializeItems() {
    this.items = ['Rina', 'Reanhu', 'Rinky', 'Rivers'];
  }

  checkedvalues = [];

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;

    if (val.length >= 3 && val.trim() !== '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.isItemAvailable = false;
    }
  }

  ionViewWillEnter() {

  }

  getFilters() {
    for (let i = 0; i < this.arr.length; i++) {
      const obj: iFilter = {
        val: this.arr[i],
        isChecked: false
      };
      this.form.push(obj);
    }
    console.log(this.form);
  }

  onSubmit() {
    this.checkedvalues = [];
    for (let i = 0; i < this.form.length; i++) {
      if (this.form[i].isChecked === true) {
        this.checkedvalues.push(this.form[i].val);
      }
    }
    console.log(this.checkedvalues);
  }

  async paynow(){
    const modal =await this.modalCtrl.create({
      component: InaiModalPage,
      cssClass: 'inai-modal'
    });
    // modal.onDidDismiss().then((data:any)=>{
    //   console.log(data);
    // });
    return await modal.present();
  }

}
