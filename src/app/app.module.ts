import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/http.service';
import { RestauranteService } from './services/restaurante.service';
import { PratosService } from './services/pratos.service';
import { routing } from './app.routes';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertModule } from 'ngx-bootstrap';
import { RestauranteComponent } from './components/Restaurante/restaurante.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FiltrarRestaurante } from './util/pipe/filtrarRestaurante.pipe';
import { RestauranteEditarComponent } from './components/restaurante-editar/restaurante-editar.component';
import { RestauranteCadastrarComponent } from './components/restaurante-cadastrar/restaurante-cadastrar.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FiltrarPratos } from './util/pipe/filtrarPratos.pipe';
import { PratosEditarComponent } from './components/pratos-editar/pratos-editar.component';
import { PratosCadastrarComponent } from './components/pratos-cadastrar/pratos-cadastrar.component';
import { PratosComponent } from './components/pratos/pratos.component';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FormatarValorPipe } from './util/pipe/formatarValor.pipe';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    FiltrarRestaurante,
    HomeComponent,
    RestauranteComponent,
    RestauranteEditarComponent,
    RestauranteCadastrarComponent,
    ModalDeleteComponent,
    PratosComponent,
    PratosCadastrarComponent,
    PratosEditarComponent,
    FiltrarPratos,
    FormatarValorPipe
  ],
  imports: [
    routing,
    FormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    CurrencyMaskModule,
    ToastrModule.forRoot(),
    AlertModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    HttpService,
    RestauranteService,
    PratosService,
    { provide: LOCALE_ID, useValue: 'pt-PT' }
  ],
  entryComponents : [ModalDeleteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
