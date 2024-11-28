import { Component, OnInit } from '@angular/core';
import { AnimationController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperarpass',
  templateUrl: './recuperarpass.page.html',
  styleUrls: ['./recuperarpass.page.scss'],
})
export class RecuperarpassPage implements OnInit {
   icono = "claro"
   sw = false
   usuario=""
   clave=""
   progressValue: number = 0; // el control de la barra de carga.
   showProgress: boolean = false; // ocultar la barra de carga.
  constructor(
    private anim: AnimationController,
    private alert: AlertController,
    private router: Router
  ) {}
  cambiarTema(){
    if(this.icono == "claro"){
      document.documentElement.style.setProperty("--fondo", "#282829")
      document.documentElement.style.setProperty("--textos", "#898989")  
      document.documentElement.style.setProperty("--fondo-input", "#263f51")  
      document.documentElement.style.setProperty("--color-titulo", "#736c6c"); 
      document.documentElement.style.setProperty("--color-parrafo", "#736c6c");   
      this.icono = "oscuro"
    }else{
      document.documentElement.style.setProperty("--fondo", "#454E5F")
      document.documentElement.style.setProperty("--textos", "#ffffff")
      document.documentElement.style.setProperty("--fondo-input", "#ffffff")  
      document.documentElement.style.setProperty("--color-titulo", "#ffffff"); 
      document.documentElement.style.setProperty("--color-parrafo", "#ffffff");  

      
      this.icono = "claro"
    }
  }


  ngOnInit() {
    this.anim.create()
      .addElement(document.querySelector("#logo")!)
      .duration(2000)
      .iterations(Infinity)
      .direction("alternate")
      .fromTo("transform", "scale(1) rotate(-20deg)", "scale(1.4) rotate(20deg)")
      .play()
  }
  login() {
    if (this.usuario == "" && this.clave == "") {
      this.mostrarAlerta("contraseña recuperada!.", ()=>{
        this.router.navigate(['/sesion'])
      })
    } 
  }
  async mostrarAlerta(texto:string, accion:()=>void){
    const alerta = await this.alert.create({
      header: "Información",
      message: texto,
      buttons: [{
        text: "Aceptar",
        handler: accion
      }]
    })
    alerta.present()
  }

  agregarViaje() {
    this.showProgress = true; // para mostrar la barra de carga visualmente.
    setTimeout(() => {
      this.router.navigate(['/home']);  // para ir a la otra pagina.
      this.showProgress = false;  // Para ocultar la barra de carga despues de la ejecucion.
    }, 2000); // el tiempo de espera para la barra de carga que seria 2 segundos.
  }
}
