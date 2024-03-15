import { Component, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedItem: any={};

  constructor(private navCtrl: NavController) {}

  profileClick(item: any) {
    this.selectedItem = item; 
    console.log(this.selectedItem);
    

  }


}
