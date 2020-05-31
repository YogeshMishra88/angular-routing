import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  selectedId : string = null;
  name : string = null;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    this.selectedId = this._route.snapshot.params['id'];
    this.name = this._route.snapshot.params['name'];
  }

}
