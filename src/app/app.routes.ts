import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RestauranteComponent } from './components/Restaurante/restaurante.component';
import { RestauranteEditarComponent } from './components/restaurante-editar/restaurante-editar.component';
import { RestauranteCadastrarComponent } from './components/restaurante-cadastrar/restaurante-cadastrar.component';
import { PratosComponent } from './components/pratos/pratos.component';
import { PratosCadastrarComponent } from './components/pratos-cadastrar/pratos-cadastrar.component';
import { PratosEditarComponent } from './components/pratos-editar/pratos-editar.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'restaurante', component: RestauranteComponent },
    { path: 'restaurante/cadastrar', component: RestauranteCadastrarComponent },
    { path: 'restaurante/alterar/:id', component: RestauranteEditarComponent },
    { path: 'pratos', component: PratosComponent },
    { path: 'pratos/cadastrar', component: PratosCadastrarComponent },
    { path: 'pratos/alterar/:id', component: PratosEditarComponent },
    { path: '**', component: HomeComponent },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);