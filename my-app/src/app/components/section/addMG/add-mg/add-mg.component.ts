import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatGastService } from 'src/app/services/mat-gast.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-mg',
  templateUrl: './add-mg.component.html',
  styleUrls: ['./add-mg.component.css']
})


export class AddMGComponent implements OnInit {
  profileForm:FormGroup = this.formBuilder.group({
    codigo : new FormControl('',[Validators.required,Validators.minLength(10)]),
    description : new FormControl('',[Validators.required,Validators.minLength(4)]),
    um : new FormControl('',Validators.required),
    pre : new FormControl('',Validators.required)  
  });


  constructor(private add:MatGastService ,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  redirectL(){
    window.location.href= 'http://localhost:4200/'
  }

  onSubmit(){
    const data = {
      codigo: this.profileForm.controls['codigo'].value,
      description:this.profileForm.controls['description'].value,
      um:this.profileForm.controls['um'].value,
      precio:this.profileForm.controls['pre'].value
    }

    
    this.add.createMG(data).subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (e:any) => console.error(e)
    });
    this.redirectL();
    
  }
  getErrorMessageC(){
    return this.profileForm.controls['codigo'].hasError('required')?"El campo no puede quedar en blanco":this.profileForm.controls['codigo'].hasError('minlength')?"Debe ser de 10 caracteres":"";
  }

  getErrorMessageD(){
    return this.profileForm.controls['description'].hasError('required')?"El campo no puede quedar en blanco":this.profileForm.controls['description'].hasError('minlength')?"Debe ser mayor de 4 caracteres":"";
  }

  getErrorMessageUM(){
    return this.profileForm.controls['um'].hasError('required')?"Debe selecionar una unidad de medida":"";
  }
  
  getErrorMessagePre(){
    return this.profileForm.controls['pre'].hasError('required')?"El campo no puede quedar en blanco":"";
  }

}
