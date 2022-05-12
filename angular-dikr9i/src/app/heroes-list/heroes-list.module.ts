import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { HeroesDetailsComponent } from './heroes-details/heroes-details.component';
import { HeroesAddComponent } from './heroes-add/heroes-add.component';
import { HeroesUpdateComponent } from './heroes-update/heroes-update.component';

const routes: Routes = [
  {
    path:"",
    component: HeroesListComponent,
    children: [
      {
        path:"details",
        children: [
          {
            path:"add",
            component: HeroesAddComponent
          },
          {
            path:"update",
            component: HeroesUpdateComponent
          },
          {
            path:":id",
            component: HeroesDetailsComponent
          },
        ]
      }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeroesListComponent,HeroesDetailsComponent,HeroesAddComponent,HeroesUpdateComponent]
})
export class HeroesListModule { }