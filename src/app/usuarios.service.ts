import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private usuarios: Usuario[] = [
    { id: "1", nombre: 'jorge', apellidos: 'mendoza' },
    { id: "2", nombre: 'daniel', apellidos: 'cataño' },
    { id: "3", nombre: 'Juan', apellidos: 'gonzales' },
    // Agrega más usuarios mockeados según sea necesario
  ];

  constructor() {}

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  getUsuario(id: string | null): Usuario | undefined {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

 actualizarUsuario(id: string, nombre: string, apellidos: string): void {
    const usuario = this.getUsuario(id);
    if (usuario) {
      usuario.nombre = nombre;
      usuario.apellidos = apellidos;
    }
  }

eliminarUsuario(id: string): void {
  // Encuentra el índice del usuario en la lista según el id proporcionado
  const index = this.usuarios.findIndex((usuario) => usuario.id === id);

  // Si se encuentra el usuario, elimínalo del array
  if (index !== -1) {
    this.usuarios.splice(index, 1);
  }
}
}
