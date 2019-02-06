import { Injectable } from '@angular/core';
import { LIBROS } from './db/libros.db'
import { Libro } from './models/libro.model';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritor(idEscritor): Libro[]{
    return LIBROS.filter((item)=>{
      return item.escritor == idEscritor
    })
  }

  }
