import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teste: string;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  
  }

  showSuccess(msg: string) {
    this.toastr.success(msg, 'Sucesso!', {
      closeButton: true,
      progressBar: true
    });
  }

}
