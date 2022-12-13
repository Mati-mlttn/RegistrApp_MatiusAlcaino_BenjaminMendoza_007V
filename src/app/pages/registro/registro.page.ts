import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroService, Usuario } from '../../service/registro.service';
import { ToastController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] = [];

  constructor(private alertController: AlertController,
              private registroService: RegistroService,
              private toastController: ToastController,
              private fb: FormBuilder) { 
                this.formularioRegistro = fb.group({
                  'nombre': new FormControl ("",Validators.required),
                  'apellido': new FormControl ("",Validators.required),
                  'correo': new FormControl ("",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
                  'password': new FormControl ("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
                  'rol': new FormControl ("",Validators.required)
                })
              }

  ngOnInit() {

    
  }

  async CrearUsuario(){
    var form =  this.formularioRegistro.value; 
    var existeCorreo = 0;

    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({ 
        header: 'Error..',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar']
      })
      await alert.present();
    }
    else{
      this.newUsuario.nomUsuario = form.nombre;
      this.newUsuario.ApeUsuario = form.apellido;
      this.newUsuario.correoUsuario = form.correo;
      this.newUsuario.passUsuario = form.password;
      this.newUsuario.rolUsusario = form.rol;

      this.registroService.getUsuarios().then(datos=>{
        this.usuarios = datos;

        if (!datos || datos.length==0){
          this.registroService.addUsuario(this.newUsuario).then(dato =>{ 
            this.newUsuario = <Usuario>{};
            this.showToast('Usuario Creado');
          });
          this.formularioRegistro.reset();
        }
        else{
          for (let obj of this.usuarios){
            if (this.newUsuario.correoUsuario == obj.correoUsuario){
              existeCorreo = 1;
            }
          }

          if (existeCorreo == 1){
            this.usuarioDuplicado();
          }
          else{
            this.registroService.addUsuario(this.newUsuario).then(dato =>{ 
              this.newUsuario = <Usuario>{};
              this.showToast('Usuario Creado');
            });
            this.formularioRegistro.reset();
          }
        }
      })
    }
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'custom-toast'
    })
    await toast.present();
    return;
  }

  async usuarioDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

}
