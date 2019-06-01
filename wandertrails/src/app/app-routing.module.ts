import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecarouselComponent } from './homecarousel/homecarousel.component';

const routes: Routes = [
  { path: 'home', component: HomecarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
