import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from '../app/feature/feature/feature.component';


const routes: Routes = [
  { path: '', component: FeatureComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeatureComponent]
})
export class FeatureModule {}
