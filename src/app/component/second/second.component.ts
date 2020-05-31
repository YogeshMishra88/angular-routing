import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  employee:any[]=[{ID:'A106',Name:'LAURA'}];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToComponent():void{
    this.router.navigate(["/third-component",{id:'EMP010',name:'Andeson John'}]);
  }

  redirectToFourthComponent() : void{
      this.router.navigate(["/fourth-componenet",this.employee[0].ID,this.employee[0].Name]);
  }
}
