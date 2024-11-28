import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  icono = "claro"

  constructor() {}

  cambiarTema(){
    if(this.icono == "claro"){
      document.documentElement.style.setProperty("--fondo", "#142930") //color input azul oscuro
      document.documentElement.style.setProperty("--textos", "#898989")    
      document.documentElement.style.setProperty("--color-titulo", "#969494"); 
      document.documentElement.style.setProperty("--color-parrafo", "#868686");  
      document.documentElement.style.setProperty("--fondo-cards", "#0f1f24");  //color azul oscuro

      this.icono = "oscuro"
    }else{
      document.documentElement.style.setProperty("--fondo", "#67bcd6") //color input celeste
      document.documentElement.style.setProperty("--textos", "#ffffff")
      document.documentElement.style.setProperty("--color-titulo", "#333"); //color negro titulo
      document.documentElement.style.setProperty("--color-parrafo", "#666"); // color gris texto
      document.documentElement.style.setProperty("--fondo-cards", "#ffffff");  //color blanco 
      this.icono = "claro"
    }
  }

}
