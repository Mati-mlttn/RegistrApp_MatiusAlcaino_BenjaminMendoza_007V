import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroService, Usuario } from '../../service/registro.service';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];
  nombre: string;
  apellido: string;




  constructor(private alertController: AlertController,
    private navController: NavController,
    private registroService: RegistroService, 
    private fb: FormBuilder) {
      this.formularioLogin = this.fb.group({ 
        'correo' : new FormControl("", Validators.required),
        'password': new FormControl("", Validators.required)
      })
     }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value; 
    var a = 0;
    this.registroService.getUsuarios().then(datos =>{ 
      this.usuarios = datos;
      if (datos.length==0)
      {
        return null;
      }
      for (let obj of this.usuarios){
        this.nombre = obj.nomUsuario;
        this.apellido = obj.ApeUsuario;
        if (obj.correoUsuario== f.correo && obj.passUsuario==f.password){
            a=1;
            localStorage.setItem('ingresado', 'true');
            localStorage.setItem('email', obj.correoUsuario);
            this.Bienvenido();

            if(obj.rolUsusario== 'ALUMNO'){
              localStorage.setItem('rol', obj.rolUsusario)
              this.navController.navigateRoot('inicio');
            }
            else{
              localStorage.setItem('rol', obj.rolUsusario)
              this.navController.navigateRoot('inicio-profe');
            }
        }
      }
      if (a==0){
        this.alertMsg();
      }
    })

  }

  async alertMsg(){
    const alert = await this.alertController.create({ 
      header : 'Error',
      message: 'Los datos ingresados no son validos',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }
  
  async Bienvenido(){
    const alert = await this.alertController.create({
      header: 'BIENVENIDO',
      message: 'Hola! ' + this.nombre + ' ' + this.apellido + ' que tal tu día...',
      buttons: ['Continuar']
    });
    await alert.present();
  }
}
