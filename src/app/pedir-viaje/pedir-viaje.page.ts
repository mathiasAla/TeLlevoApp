import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { AnimationController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pedir-viaje',
  templateUrl: './pedir-viaje.page.html',
  styleUrls: ['./pedir-viaje.page.scss'],
})
export class PedirViajePage implements OnInit {

  productos: any
  carrito: any[] = []
  icono = "claro"
  progressValue: number = 0;
  showProgress: boolean = false;
  
  

  constructor(
    private router: Router,
    private toast: ToastController,
    private http: HttpClient,
    private anim: AnimationController,

  ) {
    this.getProductos()
    if(localStorage.getItem("carrito")){
      this.carrito = JSON.parse(localStorage.getItem("carrito")!)
    }
  }


  async showToast(texto: string) {
    const toast = await this.toast.create({
      message: texto,
      duration: 3000,
      positionAnchor: 'footer',
      cssClass: 'rounded-toast'
    });
    await toast.present();
  }

  getProductos(){
    this.http.get("https://myths.cl/api/productos.php?grupo=Tellevoapp")
    .subscribe((data)=>{
      this.productos = data 
    })
  }

  addToCart(producto:any){
    this.carrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(this.carrito))
    this.showToast(`Viaje ${producto.nombre}  Agregado!.`)
  }




  cambiarTema(){
    if(this.icono == "claro"){
      document.documentElement.style.setProperty("--fondo", "#142930")
      document.documentElement.style.setProperty("--textos", "#898989")    
      document.documentElement.style.setProperty("--fondo-input", "#263f51")     
      document.documentElement.style.setProperty("--color-titulo", "#736c6c"); 
      document.documentElement.style.setProperty("--color-parrafo", "#736c6c");    
      document.documentElement.style.setProperty("--texto-input", "#d5cbcb");   
  
  
      this.icono = "oscuro"
    }else{
      document.documentElement.style.setProperty("--fondo", "#67bcd6")
      document.documentElement.style.setProperty("--textos", "#ffffff")
      document.documentElement.style.setProperty("--fondo-input", "#ffffff")  
      document.documentElement.style.setProperty("--color-titulo", "#ffffff"); 
      document.documentElement.style.setProperty("--color-parrafo", "#ffffff");   
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
      this.router.navigate(['/carrito']); // para ir a la otra pagina.
      this.showProgress = false;  // Para ocultar la barra de carga.
    }, 2000); // el tiempo de espera para la barra de carga que seria 2 segundos.
  }
}
