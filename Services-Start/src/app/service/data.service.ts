import { EventEmitter, Injectable } from '@angular/core';


@Injectable()
export class DataService {

  private data:string[] = [];
  pushedData = new EventEmitter<string>();

  constructor() { }

  addData(data:string) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }

  pushData(value:string) {
    this.pushedData.emit(value);
  }

}
