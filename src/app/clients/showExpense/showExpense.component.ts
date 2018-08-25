import { Component, OnInit } from '@angular/core';

import { ClientService } from '../shared/client.service';
import { Client } from '../shared/client.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-showexpense-list',
  templateUrl: './showExpense.component.html',
  styleUrls: ['./showExpense.component.css']
})
export class ShowExpenseComponent implements OnInit {
  clientList: Client[];
  constructor(public clientService: ClientService, public tostr: ToastrService) { }
    expenses: any;
    expenseKeys: any;
  ngOnInit() {
      this.expenseKeys = Object.keys(this.clientService.selectedClient.expense);
    this.expenses = this.clientService.selectedClient.expense;
    this.clientService.action$.subscribe(obj => {
     if (obj === 'showExp') {
        this.expenseKeys = this.clientService.selectedClient.expense ? Object.keys(this.clientService.selectedClient.expense) : [];
        this.expenses = this.clientService.selectedClient.expense;
        }
    });
  }
}
