import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'players/:id',
    component: DetailComponent
  }
]

export const routing:  ModuleWithProviders = RouterModule.forRoot(appRoutes);