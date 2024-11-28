import { Component, OnInit } from '@angular/core';
import { AnimationController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  //recuperar clave ===========================================
  usuarios = [
    { 
      nombre: "Sebastian Negro",
      email: "seba.negro@gmail.com",
      clave: "elnegro23"
    },
    {
      nombre: "matias alarcon",
      email: "ma.alarcono@duocuc.cl",
      clave: "mati123"
    },
    {
      nombre: "Vicente",
      email: "santibanezzuniga1274@gmail.com",
      clave: "duoc1234"
    },
  ]
  //===========================================
  icono = "claro"
  sw=false
  progressValue: number = 0; // el control de la barra de carga.
  showProgress: boolean = false; // ocultar la barra de carga.
  //recuperar clave ============================================
  isModalOpen = false; 
  email: string = '';
  clave: string = '';
  //============================================================


  constructor(
    //recuperar clave ================================================
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    //===============================================================
    private anim: AnimationController,
    private router: Router // "router" me sirve para navegar entre paginas.
  ) {
  }

  //recuperar clave ==================================================
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  //================================================================

  cambiarTema(){
    if(this.icono == "claro"){
      document.documentElement.style.setProperty("--fondo", "#142930")
      document.documentElement.style.setProperty("--textos", "#898989")  
      document.documentElement.style.setProperty("--fondo-input", "#0f1f24")  
      document.documentElement.style.setProperty("--color-titulo", "#cac3c3"); 
      document.documentElement.style.setProperty("--color-parrafo", "#ffe8e8");  
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

  //recuperar clave =================================================
  login(): boolean {
    console.log(`Email: ${this.email}, Clave: ${this.clave}`); 
    for (let u of this.usuarios) {
      if (u.email === this.email && u.clave === this.clave) {
        console.log(`Bienvenido/a ${u.nombre}!.`);
        return true; // el inicio de sesión fue exitoso
      }
    }
    console.log("Datos incorrectos!, te queda(n) 1 intento(s).");
    return false; //  el inicio de sesión falló
  }
  //=================================================================

  //recuperar clave ====================================================
  async resetPass(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    loading.present()
    for(let u of this.usuarios) {
      if(u.email == this.email && u.clave == this.clave){
        console.log(`Bienvenido/a ${u.nombre}!.`)
        let nueva = Math.random().toString(36).slice(-6)
        u.clave = nueva 
        let body = {
          "nombre": u.nombre,
          "app": "RegistrAPP",
          "clave": nueva,
          "email": u.email
      }
      this.http.post("https://myths.cl/api/reset_password.php", body) 
      .subscribe((data)=>{
        console.log(data)
        loading.dismiss()
      })
        return
      }
    }
    console.log("Usuario no encontrado!.")
  }
  // ===================================================================



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
      this.router.navigate(['/agregar-viaje']);  // para ir a la otra pagina.
      this.showProgress = false;  // Para ocultar la barra de carga despues de la ejecucion.
    }, 2000); // el tiempo de espera para la barra de carga que seria 2 segundos.
  }

  agregarYLogin() {
    this.agregarViaje();
    this.login();
  }
}
