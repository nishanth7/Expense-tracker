import { Injectable, EventEmitter } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Client} from './client.model';
@Injectable()
export class ClientService {
  clientList: AngularFireList<any>;
  selectedClient: Client = new Client();
  public action$ = new MyEventEmitter();
  constructor(public firebase: AngularFireDatabase ) { }

  getData() {
    this.clientList = this.firebase.list('clients');
    return this.clientList;
  }

  insertClient(client: Client) {
    const test  = [];
    this.clientList.push({
      name: client.name,
      expense: test
    });
  }

  updateClient(client: any) {
    const exp = {
      expName: client.expenseName,
      expValue: client.expenseValue,
      expCurrency: client.expenseCurrency,
      expDescription: client.expenseDesc
    };
   // this.selectedClient.expense.push(exp);
    if (this.selectedClient.expense === undefined || this.selectedClient.expense === null) {
    this.selectedClient.expense = { };
   }
   if (client.expenseName !== undefined) {
    this.selectedClient.expense[client.expenseName] = exp;
   }
    this.clientList.update(client.$key,
      {
        name: client.name,
        expense: this.selectedClient.expense
      });
  }

  deleteClient($key: string) {
    this.clientList.remove($key);
  }

}

export class MyEventEmitter<T> extends EventEmitter<T> {
  private views: any = {};

  subscribe(generatorOrNext?: any, subscriber?: string, error?: any, complete?: any): any {
      if (subscriber && this.views[subscriber]) {
          return null;
      } else {
          this.views[subscriber] = true;
          return super.subscribe(generatorOrNext, error, complete);
      }
  }
}
