import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { JobProfileComponentModule } from '../job-profile/job-profile.module';
import { JobScoreComponentModule } from '../job-score/job-score.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule, JobProfileComponentModule, JobScoreComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
