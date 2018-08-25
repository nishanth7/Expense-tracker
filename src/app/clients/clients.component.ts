import { Component, OnInit } from '@angular/core';

import { ClientService } from './shared/client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers : [ClientService]
})
export class ClientsComponent implements OnInit {
  view: string;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.view = '';
    this.clientService.action$.subscribe(obj => {
      if (obj === 'addExp') {
        this.view = 'addexpense';
      } else if (obj === 'showExp') {
        this.view = 'showExpense';
      } else if (obj === 'reset') {
        this.view = '';
      } else if (obj === 'editclient') {
        this.view = 'addClient';
      }
  });

  }
  addClient () {
    this.view = 'addClient';
  }

}
