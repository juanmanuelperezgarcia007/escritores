import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { PerfilEscritorComponent } from './perfil-escritor/perfil-escritor.component';

const routes: Routes = [
  {path: 'escritores', component:ListaComponent},
  {path: 'escritores/:idEscritor', component: PerfilEscritorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
