import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service'; // Importa el servicio
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ActualizarUsuarioComponent implements OnInit {
  usuario: any ; // Datos del usuario

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService // Inyecta el servicio
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuario = this.usuariosService.getUsuario(id);
  }

  actualizarUsuario(id: string, nombre: string, apellidos: string) {
    // Llama a la función del servicio para actualizar el usuario
    this.usuariosService.actualizarUsuario(id, nombre, apellidos);

    // Redirige a la vista de listar usuarios después de actualizar
    this.router.navigate(['/lista-usuarios']);
  }
}
