import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-perfil-escritor',
  templateUrl: './perfil-escritor.component.html',
  styleUrls: ['./perfil-escritor.component.css']
})
export class PerfilEscritorComponent implements OnInit {
  perfEscritor: Escritor

  constructor(private activatedRoute:ActivatedRoute, private escritoresService: EscritoresService) {
    this.activatedRoute.params.subscribe(params =>{
     this.perfEscritor = this.escritoresService.getById(params.idEscritor)
    })
   }

  ngOnInit() {
  }
  
}
