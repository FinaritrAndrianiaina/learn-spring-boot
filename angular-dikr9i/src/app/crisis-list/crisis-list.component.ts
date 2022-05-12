import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.data.pipe(map(d=> d.crisis)).subscribe(console.log)
  }

  ngOnInit() {
  }

}