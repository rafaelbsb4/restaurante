import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../model/restaurante';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestauranteService } from '../../services/restaurante.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-restaurante-editar',
  templateUrl: './restaurante-editar.component.html',
  styleUrls: ['./restaurante-editar.component.css']
})
export class RestauranteEditarComponent implements OnInit {


  public nomeRestaurante: string;
  public idRestaurante: number;
  public restaurante: Restaurante = new Restaurante({});
  public erroForm: boolean;
  public messageError: string;
  public showSuccess: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: RestauranteService,
    private toastr: ToastrService,


  ) {
    this.idRestaurante = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.api.get(this.idRestaurante).subscribe(data => {
      if (data) {
        this.restaurante = new Restaurante(data);
      }
    });
  }
  update() {
    this.api.update(this.idRestaurante, this.restaurante).subscribe(data => {
      if (data) {
        this.toastr.success("Restaurante atualizado com sucesso.", "Sucesso");
        this.router.navigate(['restaurante']);
      } else {

      }
    });
  }

  validateForm() {
    if (!this.restaurante.nomeRestaurante) {
      this.toastr.error("não foi possivel atualizar o cadastro");
    } else {
      this.update();
    }

  }
}
