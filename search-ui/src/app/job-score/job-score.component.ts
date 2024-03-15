import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-score',
  templateUrl: './job-score.component.html',
  styleUrls: ['./job-score.component.scss'],
})
export class JobScoreComponent  implements OnInit {
  @Input() itemData?: any = {};

  constructor() { }

  ngOnInit() {
    console.log(this.itemData);
    
  }

}
