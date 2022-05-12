import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxPermissionsService,NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  profileControl = new FormControl("GUEST");

  constructor(private permServices: NgxPermissionsService) {
    this.permServices.loadPermissions(['GUEST']);
  }

  public ngOnInit() {
    this.profileControl.valueChanges.subscribe((value)=>{
      console.log(value);
      this.permServices.loadPermissions([value]);
    })
  }

 }
 