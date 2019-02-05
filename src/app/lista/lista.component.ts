import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../escritores.service';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
    lista: Escritor[]
    
  constructor(private escritoresService:EscritoresService) {
    this.lista= this.escritoresService.getAll()
    console.log(this.lista)
   }

  ngOnInit() {
  }

}
