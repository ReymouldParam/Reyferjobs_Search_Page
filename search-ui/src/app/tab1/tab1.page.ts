import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  resData: any = {}
  itemData: any = {};
  checkRadio:any="resume1";
  constructor() { }

  ngOnInit() {
  }



}
