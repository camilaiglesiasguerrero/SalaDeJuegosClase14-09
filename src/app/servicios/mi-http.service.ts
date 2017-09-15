import { Injectable } from '@angular/core'; //=> que se puede recibir pr el contructor y utilizarlo
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {

  constructor(public http : Http)//objeto de tipo HTTP 
  { }

  public DameUnaPromesa(url : string)
  {
    return this.http.get(url).toPromise().then(this.ExtraerDatos).catch(this.ManejadorDeError);//sin parentesis el this.ManejadorDeError porque es un puntero a función
  }
   
  public ManejadorDeError(error : Response | any)
  {
    return error;
  }

  public ExtraerDatos(respuesta : Response)
  {
    return respuesta.json() || {}; //o devuelve un json o devuelve vacío
  }

}
