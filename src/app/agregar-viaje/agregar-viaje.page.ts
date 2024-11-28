import { Component, OnInit} from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-viaje',
  templateUrl: './agregar-viaje.page.html',
  styleUrls: ['./agregar-viaje.page.scss'],
})


export class AgregarViajePage implements OnInit {

  icono = "claro"
  progressValue: number = 0; // el control de la barra de carga.
  showProgress: boolean = false; // ocultar la barra de carga.
  

  constructor(
    private anim: AnimationController,  
    private router: Router // "router" me sirve para navegar entre paginas.
  ) {} 



  cambiarTema(){
    if(this.icono == "claro"){
      document.documentElement.style.setProperty("--fondo", "#142930")
      document.documentElement.style.setProperty("--textos", "#898989")   
      document.documentElement.style.setProperty("--color-titulo", "#736c6c"); 
      document.documentElement.style.setProperty("--fondo-input", "#263f51")  
      document.documentElement.style.setProperty("--texto-input", "#d5cbcb");   


   
      this.icono = "oscuro"
    }else{
      document.documentElement.style.setProperty("--fondo", "#67bcd6")
      document.documentElement.style.setProperty("--textos", "#ffffff")
      document.documentElement.style.setProperty("--color-titulo", "#ffffff"); 
      document.documentElement.style.setProperty("--fondo-input", "#ffffff")  
      document.documentElement.style.setProperty("--texto-input", "#1b1b1b");   
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

  agregarViaje() {
    this.showProgress = true; // para mostrar la barra de carga visualmente.
    setTimeout(() => {
      this.router.navigate(['/home']);  // para ir a la otra pagina.
      this.showProgress = false;  // Para ocultar la barra de carga despues de la ejecucion.
    }, 2000); // el tiempo de espera para la barra de carga que seria 2 segundos.
  }
}
