import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobProfileComponent } from './job-profile.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [JobProfileComponent],
  exports: [JobProfileComponent]
})
export class JobProfileComponentModule {}
