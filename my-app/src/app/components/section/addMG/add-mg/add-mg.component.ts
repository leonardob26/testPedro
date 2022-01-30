import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatGast } from 'src/app/model/MatGast.model';
import { MatGastService } from 'src/app/services/mat-gast.service';

@Component({
  selector: 'app-add-mg',
  templateUrl: './add-mg.component.html',
  styleUrls: ['./add-mg.component.css']
})
export class AddMGComponent implements OnInit {
  matGast:MatGast = {
    codigo:'',
    description:'',
    um:'',
    precio:undefined
  }

  codigo = new FormControl('',[Validators.required,Validators.minLength(4)]);
  description = new FormControl('',[Validators.required,Validators.minLength(4)]);
  um = new FormControl('',[Validators.required]);
  pre = new FormControl('',[Validators.required]);
  
  constructor(private add:MatGastService) { }

  ngOnInit(): void {
  }

  redirectL(){
    window.location.href= 'http://localhost:4200/'
  }

  submit(){
    const data = {
      codigo: this.matGast.codigo,
      description:this.matGast.description,
      um:this.matGast.um,
      precio:this.matGast.precio
    }

    console.log(JSON.stringify(this.matGast));
    
    this.add.createMG(data).subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (e:any) => console.error(e)
    });
    this.redirectL();
  }
    
  

}
