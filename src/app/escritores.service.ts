import { Injectable } from '@angular/core';
import { Escritor } from './models/escritor.model';
import {ESCRITORES} from './db/escritores.db'
@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }
  getAll():Escritor[]{
    return ESCRITORES
  }

  getById(id):Escritor{
    return ESCRITORES.find((item)=> {
      return item.id == id
    })
  }
}
