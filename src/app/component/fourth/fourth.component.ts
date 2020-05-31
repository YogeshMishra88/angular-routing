import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
    empId : string = null;
    empName : string = null;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
   this._route.params.subscribe((params:Params)=>{
     this.empId = params['id'];
     this.empName = params['name'];
   })
  }

}
