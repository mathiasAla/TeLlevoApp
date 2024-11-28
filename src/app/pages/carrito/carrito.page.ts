import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AnimationController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  productos: any
  carrito: any[] = []
  icono = "claro"
  constructor(private router: Router,
    private toast: ToastController,
    private http: HttpClient,
    private anim: AnimationController,

  ) {
    this.getProductos()
    if(localStorage.getItem("carrito")){
      this.carrito = JSON.parse(localStorage.getItem("carrito")!)
    }
  }
  getProductos(){
    this.http.get("https://myths.cl/api/productos.php?grupo=Tellevoapp")
    .subscribe((data)=>{
      this.productos = data 
    })
  }
  cambiarTema(){
    if(this.icono == "claro"){
      document.documentElement.style.setProperty("--fondo", "#142930")
      document.documentElement.style.setProperty("--textos", "#898989")  
      document.documentElement.style.setProperty("--fondo-input", "#263f51")  
      document.documentElement.style.setProperty("--color-titulo", "#736c6c"); 
      document.documentElement.style.setProperty("--color-parrafo", "#736c6c");   
      this.icono = "oscuro"
    }else{
      document.documentElement.style.setProperty("--fondo", "#67bcd6")
      document.documentElement.style.setProperty("--textos", "#ffffff")
      document.documentElement.style.setProperty("--fondo-input", "#ffffff")  
      document.documentElement.style.setProperty("--color-titulo", "#ffffff"); 
      document.documentElement.style.setProperty("--color-parrafo", "#ffffff");  
      this.icono = "claro"
    }
  }
  delToCart(indice:number){
    this.carrito.splice(indice, 1)
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
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
    

}
