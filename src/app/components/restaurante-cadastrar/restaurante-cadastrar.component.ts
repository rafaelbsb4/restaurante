import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Restaurante } from '../../model/restaurante';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-restaurante-cadastrar',
  templateUrl: './restaurante-cadastrar.component.html',
  styleUrls: ['./restaurante-cadastrar.component.css']
})
export class RestauranteCadastrarComponent implements OnInit {
  public restaurante: Restaurante = new Restaurante({});
  public erroForm: boolean;

  constructor(
    private api: RestauranteService,
    private router: Router,
    private toastr: ToastrService,

  ) {
    this.erroForm = false;
    
  }

  ngOnInit() {
  }

  cadastrar() {
    if (!this.restaurante.nomeRestaurante || this.restaurante.nomeRestaurante === "") {
      this.erroForm = true;
      this.toastr.warning("Por favor preencha corretamente campo nome do restaurante.", "Atenção");
    } else {
      this.api.create(this.restaurante).subscribe(res => {
        this.router.navigate(['/restaurante']);
        this.toastr.success("Restaurante cadastrado com sucesso.", "Sucesso");
      });
    }


  }
}