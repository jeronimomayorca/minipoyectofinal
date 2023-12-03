import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component'; // Asegúrate de importar el componente y ajustar la ruta
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lista-usuarios', pathMatch: 'full' },
  { path: 'lista-usuarios', component: ListaUsuariosComponent },
  { path: 'actualizar-usuario/:id', component: ActualizarUsuarioComponent }, // Ruta para actualizar
  { path: 'crear-usuario', component: CrearUsuarioComponent }, // Ruta para crear
];

