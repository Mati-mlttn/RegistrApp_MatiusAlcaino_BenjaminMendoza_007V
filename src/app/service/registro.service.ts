import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Usuario{
  nomUsuario: string;
  ApeUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  rolUsusario: string;
}

const USERS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private _storage: Storage;

  constructor( private storage: Storage) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async addUsuario(dato: Usuario):Promise <any>{
    return this.storage.get(USERS_KEY).then((datos: Usuario[]) => {
      if(datos){
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }
      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })    
  }

  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }
}
