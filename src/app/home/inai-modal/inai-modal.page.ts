import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

declare let window: any;

@Component({
  selector: 'app-inai-modal',
  templateUrl: './inai-modal.page.html',
  styleUrls: ['./inai-modal.page.scss'],
})


export class InaiModalPage implements OnInit {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering

  ngOnInit() {
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://assets.inai.io/checkout/v1/inai.js';
    scriptElem.onload = () => {
      console.log('entering function');
      console.log(window.inai);
      window.inai
        .initialize({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          container_id: 'inai-widget',
          token: 'ci_4rJZjCwrZ2YrrY2kgnczeU8PGN1a8JkavRZ1ydo52svu', // as documented above
          // eslint-disable-next-line @typescript-eslint/naming-convention
          order_id: 'b3db4ecf-6a1c-40c1-8ad8-e6adc8743e3b', // as documented above
          styles: {
            // documented below
            container: {},
            cta: {},
            errorText: {},
          },
          ctaText: 'Pay Now', // you can customize this
        })
        .then((response) => {
          // discussed below
          // handle a successful transaction
        })
        .catch((error) => {
          // discussed below
          // handle a failed transaction
        });
    };
    document.body.appendChild(scriptElem);
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
