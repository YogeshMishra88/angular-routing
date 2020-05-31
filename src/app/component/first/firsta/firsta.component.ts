import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-firsta',
  templateUrl: './firsta.component.html',
  styleUrls: ['./firsta.component.css']
})
export class FirstaComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("hello fron ngOnInit.....")
    console.log(id);
  }

}
