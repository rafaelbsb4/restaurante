import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../services/restaurante.service';
import { Restaurante } from '../../model/restaurante';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteComponent } from '../../modal-delete/modal-delete.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  public listaRestaurante: any;
  public consulta: string;
  
  constructor(
    private restauranteService: RestauranteService,
    private toastr: ToastrService,
    private modalService: NgbModal) {
    this.consulta = '';
    }

  ngOnInit() {
    this.searchRestaurante();
  }

  searchRestaurante() {
    this.restauranteService.getAll().subscribe(data => {
      this.listaRestaurante = data;
    })
  }
  
  deleteRestaurante(idRestaurante: number) {
    this.restauranteService.delete(idRestaurante).subscribe(result => {
      if (result) {
        this.searchRestaurante();
        this.toastr.success("Restaurante Excluido com sucesso", "Sucesso")
      } else {
        this.toastr.error("Falha ao deletar o restaurante", "Erro");

      }
    });
  }

  openModalDelete(id: number, nome: string) {
    const modalRef = this.modalService.open(ModalDeleteComponent);
    modalRef.componentInstance.data = nome;
    modalRef.result.then(result => {
      if (result) {
        this.deleteRestaurante(id);
      }
    });
  }
}
