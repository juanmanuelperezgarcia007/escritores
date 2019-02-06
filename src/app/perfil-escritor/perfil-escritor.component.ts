import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';
import { LibrosService } from '../libros.service';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'app-perfil-escritor',
  templateUrl: './perfil-escritor.component.html',
  styleUrls: ['./perfil-escritor.component.css']
})
export class PerfilEscritorComponent implements OnInit {
  perfEscritor: Escritor
  arrLibros: Libro[]

  constructor(private activatedRoute:ActivatedRoute, private escritoresService: EscritoresService, private librosService: LibrosService) {
    this.activatedRoute.params.subscribe(params =>{
     this.perfEscritor = this.escritoresService.getById(params.idEscritor)
    this.arrLibros= this.librosService.getByEscritor(this.perfEscritor.id)
    

    })
   }

  ngOnInit() {
  }
  
}
