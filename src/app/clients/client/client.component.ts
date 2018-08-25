import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ClientService } from '../shared/client.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public clientService: ClientService, public tostr: ToastrService) { }

  ngOnInit() {

  //  this.resetForm();
  }

  onSubmit(clientForm: NgForm) {
    if (clientForm.value.$key == null) {
      this.clientService.insertClient(clientForm.value);
    } else {
      this.clientService.updateClient(clientForm.value);
    }
    this.resetForm(clientForm);
    this.tostr.success('Submitted Succcessfully', 'Client Register');
  }

  resetForm(clientForm?: NgForm) {
    if (clientForm != null) {
      clientForm.reset();
    }
    this.clientService.action$.emit('reset');
    this.clientService.selectedClient = {
      $key: null,
      name: '',
      expense: []
    };
  }

}
