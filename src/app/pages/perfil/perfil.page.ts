import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Usuario } from '../../service/registro.service';
import { RegistroService } from '../../service/registro.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  usuarios : Usuario[] = [];
  nombre : string;
  apellido: string;
  rol:  string;
  correo: string;



  constructor(private alertController: AlertController,
              private navController: NavController,
              private registroService: RegistroService) { }
  
  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    this.registroService.getUsuarios().then(datos =>{
      this.usuarios = datos;
      for (let obj of this.usuarios){
        if (localStorage.getItem("email")== obj.correoUsuario){
          this.nombre = obj.nomUsuario;
          this.apellido = obj.ApeUsuario;
          this.rol = obj.rolUsusario;
          this.correo = obj.correoUsuario;
        }
      }
    })
  }


  async Salir(){
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: '¿Desea cerrar sesión?',
      buttons: [{text: 'No', handler: () => {} },
                {text: 'Si', handler: () => {localStorage.removeItem('ingresado');
                  this.navController.navigateRoot('sesion');}}]
    });
    await alert.present();
  }

}
