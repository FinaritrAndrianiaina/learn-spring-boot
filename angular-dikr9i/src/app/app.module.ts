import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CrisisResolver } from './crisis-list/crisis-data.resolver';
import { DataService } from './data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxPermissionsModule.forRoot()
  ],
  providers:[CrisisResolver,DataService],
  declarations: [
    AppComponent,
    HelloComponent,
    CrisisListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
