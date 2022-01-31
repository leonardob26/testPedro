import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatGast } from 'src/app/model/MatGast.model';
import { MatGastService } from 'src/app/services/mat-gast.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPromptComponent } from 'src/app/material/confirmationPrompt/confirmation-prompt/confirmation-prompt.component';

import { MatSnackBar } from '@angular/material/snack-bar';



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
  
  constructor( 
    private fetchMG: MatGastService ,
    private confirmation: MatDialog ,
    private Sn: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.fetchMG.readAll().subscribe(data=> {
      console.log(data);
      this.lists = data
    })
  }
  delete(){
   
    this.fetchMG.deleteMG(this.currentMG.id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => {
        console.error(e);
      }
    });
    alert(`Se ha eliminado ${this.currentMG.description} exitosamente!!`);
    //this.redirectL();
    
    //this.eliminar = true;

  }

  setActiveMatGast(matG:MatGast,index:number){
    this.currentIndex = index;
    this.currentMG = matG;

  }

  redirectL(){
    window.location.href= 'http://localhost:4200/'
  }

  showConfirmationPrompt(){
    this.confirmation.open(ConfirmationPromptComponent, {data:`Esta seguro que desea eliminar ${this.currentMG.description}`})
    .afterClosed()
    .subscribe((can:boolean) => {
      if(can){
        this.delete();
        this.redirectL();
      }
    })
  }

  showAlertS(){
    this.Sn.open("Successfully","close",{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"top",
      panelClass:"background-green"
    })
  }
}
