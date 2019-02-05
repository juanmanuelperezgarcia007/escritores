import { Component, OnInit, Input } from '@angular/core';
import { Escritor } from '../models/escritor.model';

@Component({
  selector: 'detalle-escritor',
  templateUrl: './detallesescritor.component.html',
  styleUrls: ['./detallesescritor.component.css']
})
export class DetallesescritorComponent implements OnInit {
  
    @Input() escritor:Escritor

  constructor() { }

  ngOnInit() {
  }

}
