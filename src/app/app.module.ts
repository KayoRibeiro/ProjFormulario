import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { routing } from './app.routing.module';
import { PerguntasService } from './perguntas.service';
import { TelaFinalComponent } from './tela-final/tela-final.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TelaFinalComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [PerguntasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
