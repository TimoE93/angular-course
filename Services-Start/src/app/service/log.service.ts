import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  log(value:string) {
    console.log(value);
  }

  constructor() { }

}
