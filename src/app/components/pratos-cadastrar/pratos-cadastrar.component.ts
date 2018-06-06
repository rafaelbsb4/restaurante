import { Component, OnInit } from '@angular/core';
import { PratosService } from '../../services/pratos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pratos } from '../../model/pratos';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Restaurante } from '../../model/restaurante';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-pratos-cadastrar',
  templateUrl: './pratos-cadastrar.component.html',
  styleUrls: ['./pratos-cadastrar.component.css']
})
export class PratosCadastrarComponent implements OnInit {
  public pratos: Pratos = new Pratos({});
  public listaRestaurante: any;

  constructor(
    private api: PratosService,
    private restauranteApi: RestauranteService,
    private router: Router,
    private toastr: ToastrService,

  ) {

  }

  ngOnInit() {
    this.restauranteApi.getAll().subscribe(data => {
      this.listaRestaurante = data;
    });
  }

  cadastrar() {
     if (!this.pratos.nomePrato || this.pratos.nomePrato === ""
      || !this.pratos.valorPrato
      ) {
      this.toastr.warning("Para continuar, preencha todos os campos obrigatórios do formulário.", "Atenção")
    } else {
      this.api.create(this.pratos).subscribe(res => {
        this.router.navigate(['/pratos']);
        this.toastr.success("Prato cadastrado com sucesso.", "Sucesso");
      });
    }
  }
}