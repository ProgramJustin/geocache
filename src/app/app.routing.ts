import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';


const appRoutes: Routes = [
  {
    path: '',
    component: GeocacheFormComponent
  }
];







export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
