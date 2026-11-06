import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriaService } from '../../servicios/categoriaService';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  constructor(public categoriaService: CategoriaService) {}
}