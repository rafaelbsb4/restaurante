import { Component, OnInit } from '@angular/core';
import { Pratos } from '../../model/pratos';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PratosService } from '../../services/pratos.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RestauranteService } from '../../services/restaurante.service';
import { Restaurante } from '../../model/restaurante';


@Component({
  selector: 'app-pratos-editar',
  templateUrl: './pratos-editar.component.html',
  styleUrls: ['./pratos-editar.component.css']
})
export class PratosEditarComponent implements OnInit {

  public listaRestaurante: any;
  public nomePrato: string;
  public idPratos: number;
  public prato: Pratos = new Pratos({});
  public idRestaurante: number;
  public nomeRestaurante: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: PratosService,
    private apiRestaurante: RestauranteService,
    private toastr: ToastrService,


  ) {
    this.idPratos = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.api.get(this.idPratos).subscribe(data => {
      if (data) {
        this.prato = new Pratos(data);
      }
    });
    this.apiRestaurante.getAll().subscribe(data => {
      this.listaRestaurante = data;
    });
  }
  update() {
    this.api.update(this.idPratos, this.prato).subscribe(data => {
      if (data) {
        this.toastr.success("Prato atualizado com sucesso.", "Sucesso");
        this.router.navigate(['pratos']);
      } else {
        this.toastr.error("não foi possivel atualizar o cadastro");
      }
    });
  }

  validateForm() {
    if (!this.prato.nomePrato) {
      this.toastr.error("não foi possivel atualizar o cadastro");
    } else {
      this.update();
    }

  }
}
