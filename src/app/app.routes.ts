import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CarlistComponent } from './components/carlist/carlist.component';

export const routes: Routes = [
    {path:'', component: CarlistComponent},
    {path:'about', component: AboutComponent},
];
