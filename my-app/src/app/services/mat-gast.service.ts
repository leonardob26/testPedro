import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { MatGast } from '../model/MatGast.model';

@Injectable({
  providedIn: 'root'
})
export class MatGastService {

  constructor(private fetch: HttpClient) { }
  
  createMG(data:MatGast){
    return this.fetch.post('http://localhost:3000/gastn',data);
  }

  readAll():Observable<MatGast[]>{
    return this.fetch.get<MatGast[]>('http://localhost:3000/gastn');
  }

  updateMG(data:MatGast,id:any){
    return this.fetch.put(`http://localhost:3000/gastn/${id}`,data);
  }

  deleteMG(id:any){
    return this.fetch.delete(`http://localhost:3000/gastn/${id}`);
  }

}
