import { Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CrisisResolver } from './crisis-list/crisis-data.resolver';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

export const routes: Routes = [
  {
    path: 'crisis-list',
    component: CrisisListComponent,
    canActivate: [NgxPermissionsGuard],
    resolve:{
      crisis: CrisisResolver
    },
    data: {
      permissions: {
        only: ['ADMIN'],
        redirectTo:"/"
      },
    },
  },
  {
    path: 'heroes-list',
    loadChildren: () => import("./heroes-list/heroes-list.module").then(m=>m.HeroesListModule),
    canActivate:[NgxPermissionsGuard],
    data:{
      permissions:{
        only:["GUEST"],
        redirectTo:"/"
      }
    }
  },
];
