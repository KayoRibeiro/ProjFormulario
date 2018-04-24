import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { AppComponent } from './app.component';
import { TelaFinalComponent } from './tela-final/tela-final.component';


const APP_ROUTES: Routes = [
            {path: 'formulario', component: FormularioComponent},
            {path: 'final', component: TelaFinalComponent}
           



];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);