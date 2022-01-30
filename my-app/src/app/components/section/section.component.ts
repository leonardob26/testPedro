import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatGast } from 'src/app/model/MatGast.model';
import { MatGastService } from 'src/app/services/mat-gast.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  add:boolean = false;
  editar:boolean = false;
  eliminar:boolean = false;
  lists:MatGast[] = [];
  currentIndex = -1;
  currentMG:MatGast = {};
  message:string = this.lists.length === 0?"":"any";
  constructor( private fetchMG: MatGastService) { }

  ngOnInit(): void {
    this.fetchMG.readAll().subscribe(data=> {
      console.log(data);
      this.lists = data
    })
  }
  delete(){
    alert(this.currentMG.id);
    this.fetchMG.deleteMG(this.currentMG.id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.error(e);
      }
    });
    this.eliminar = true;

  }

  setActiveMatGast(matG:MatGast,index:number){
    this.currentIndex = index;
    this.currentMG = matG;

  }

  redirectL(){
    window.location.href= 'http://localhost:4200/'
  }

}
