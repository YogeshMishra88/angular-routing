import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToComponent():void{
    console.log("Redirection.......");
    this.router.navigate(["/first-component",{id:1,name:'xxxx'}]);
  }
}
