import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {

  id: Number

  constructor(private route: ActivatedRoute) { 
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {
  }

}