import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetallesescritorComponent } from './detallesescritor/detallesescritor.component';
import { PerfilEscritorComponent } from './perfil-escritor/perfil-escritor.component';
import { ListalibrosComponent } from './listalibros/listalibros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetallesescritorComponent,
    PerfilEscritorComponent,
    ListalibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
