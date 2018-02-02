import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getList(callback){
    //TODO: change it with real webservice
    const list=[
      new Coffee("Double Espresso","Sunny Cafe",new PlaceLocation("123 Market St","San Francisco",)),
      new Coffee("Caramel Americano","Starcoffe", new PlaceLocation("Gran Via 34","Madrid"))
    ];

    callback(list);

  }

  save(coffe, callback){
    //TODO: change it with real webservice
    callback(true);
  }

}
