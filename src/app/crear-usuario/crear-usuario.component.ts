import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  standalone: true,
  imports:[FormsModule]
})
export class CrearUsuarioComponent {
  nombre: string = '';
  apellidos: string = '';
  id: string = "";
  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  crearUsuario() {
    // Construye un objeto de tipo Usuario con los valores del formulario
    const nuevoUsuario: Usuario = {
      id: this.id,
      nombre: this.nombre,
      apellidos: this.apellidos
    };

    // Llama a la función del servicio para crear el nuevo usuario
    this.usuariosService.agregarUsuario(nuevoUsuario);

    // Redirige a la vista de listar usuarios después de crear
    this.router.navigate(['/lista-usuarios']);
  }
}
