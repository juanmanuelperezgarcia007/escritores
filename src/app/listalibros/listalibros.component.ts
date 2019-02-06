import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../models/libro.model';

@Component({
  selector: 'lista-libros',
  templateUrl: './listalibros.component.html',
  styleUrls: ['./listalibros.component.css']
})
export class ListalibrosComponent implements OnInit {
  @Input() libros: Libro[]
  constructor() { }

  ngOnInit() {
  }

}
