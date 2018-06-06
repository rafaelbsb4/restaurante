import { Component, OnInit } from '@angular/core';
import { PratosService } from '../../services/pratos.service';
import { Pratos } from '../../model/pratos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDeleteComponent } from '../../modal-delete/modal-delete.component';
import { ToastrService } from 'ngx-toastr';
import { NumberUtil } from '../../util/NumberUtil';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {

  public listaPratos: any;
  public consulta: string;
  constructor(
    private toastr: ToastrService,
    private pratosService: PratosService,
    private modalService: NgbModal) {
    this.consulta = '';
  }

  ngOnInit() {
    this.searchPratos();
  }
  

  searchPratos() {
    this.pratosService.getAll().subscribe(data => {
      this.listaPratos = data;
    });
  }
  
  deletePratos(idPrato: number) {
    this.pratosService.delete(idPrato).subscribe(result => {
      if (result) {
        this.searchPratos();
      } else {

      }
    })
  }

  openModalDelete(id: number, nome: any) {
    const modalRef = this.modalService.open(ModalDeleteComponent);
    let data = [];
    modalRef.componentInstance.data = nome;
    modalRef.result.then(result => {
      if (result) {
        this.deletePratos(id);
        this.toastr.success("Prato excluído com sucesso.", "Sucesso");
      }
    });
  }
}
