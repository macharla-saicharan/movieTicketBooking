import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:"", component:MoviesComponent},
  { path:"movies", component:MoviesComponent},
  { path:"booking", component:BookingDetailsComponent},
  { path:'bookingForm',component:BookingFormComponent},
  {path:'**', component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
