import { Component, OnInit } from '@angular/core';

import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientList: Client[];
  constructor(public clientService: ClientService, public tostr: ToastrService) { }

  ngOnInit() {
    const x = this.clientService.getData();
    x.snapshotChanges().subscribe(item => {
      this.clientList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.clientList.push(y as Client);
      });
    });
  }

  onEdit(cli: Client) {
    this.clientService.selectedClient = Object.assign({}, cli);
    this.clientService.action$.emit('editclient');
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.clientService.deleteClient(key);
      this.clientService.action$.emit('reset');
      this.tostr.warning('Deleted Successfully', 'Client register');
    }
  }

  openAddExpense(cli: Client) {
    this.clientService.selectedClient = Object.assign({}, cli);
    this.clientService.action$.emit('addExp');
  }

  showExpense(cli: Client) {
    this.clientService.selectedClient = Object.assign({}, cli);
    this.clientService.action$.emit('showExp');
  }

}
