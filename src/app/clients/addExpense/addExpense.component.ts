import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ClientService } from '../shared/client.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addexpense',
  templateUrl: './addExpense.component.html',
  styleUrls: ['./addExpense.component.css']
})
export class AddExpenseComponent implements OnInit {
    expenseValue: number;
    expenseName: string;
    expenseCurrency: string;
    expenseDesc: string;
  constructor(public clientService: ClientService, public tostr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(addExpenseForm: NgForm) {
    if (addExpenseForm.value.$key == null) {
      this.clientService.insertClient(addExpenseForm.value);
    } else {
      const exp = {
        $key: addExpenseForm.value.$key,
        name: this.clientService.selectedClient.name,
        expenseName: addExpenseForm.value.expenseName,
        expenseValue: addExpenseForm.value.expenseValue,
        expenseCurrency: addExpenseForm.value.expenseCurrency,
        expenseDesc: addExpenseForm.value.expenseDesc,
      };
      this.clientService.updateClient(exp);
    }
    this.resetForm(addExpenseForm);
    this.tostr.success('Added Succcessfully', 'Expense tracker');
  }

  resetForm(addExpenseForm?: NgForm) {
    if (addExpenseForm != null) {
        addExpenseForm.reset();
    }
    this.clientService.action$.emit('reset');
    this.clientService.selectedClient = {
      $key: null,
      name: '',
      expense: []
    };
  }

}
