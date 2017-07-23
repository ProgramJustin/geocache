import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { GeocacheListComponent} from './geocache-list/geocache-list.component';
import { GeocacheDetailComponent } from './geocache-detail/geocache-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: GeocacheFormComponent
  },
  {
    path: 'geolist',
    component: GeocacheListComponent
  },
  {
    path: 'geocaches/:id',
    component: GeocacheDetailComponent
  },
  // {
  //   path: 'geocaches/:id',
  //   component: GeocacheListComponent
  // }
];







export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
