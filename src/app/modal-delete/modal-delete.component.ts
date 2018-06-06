import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurante } from '../model/restaurante';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {
  data: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }

  activeDelete(sendDelete: boolean) {
    if (sendDelete) {
      this.activeModal.close(true);
    } else {
      this.activeModal.close(false);
    }

  }
}
