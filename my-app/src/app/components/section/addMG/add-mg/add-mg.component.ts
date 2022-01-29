import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-mg',
  templateUrl: './add-mg.component.html',
  styleUrls: ['./add-mg.component.css']
})
export class AddMGComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectL(){
    window.location.href= 'http://localhost:4200/'
  }

}
