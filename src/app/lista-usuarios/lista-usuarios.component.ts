import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  standalone: true,
  imports:[CommonModule, RouterModule]
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
    this.cdr.detectChanges(); // Forzar una actualización de la vista
  }

  eliminarUsuario(id: string): void {
    this.usuariosService.eliminarUsuario(id);
    this.usuariosService.getUsuarios();
    console.log("aaaa")
    // Actualiza la lista de usuarios después de eliminar
    this.cdr.detectChanges();
  }

}
