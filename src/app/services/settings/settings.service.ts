import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

    ajustes:Ajustes={
        temaUrl:'assets/css/colors/default.css',
        tema:'default'
      }
    
      constructor() {
        this.cargarAjustes();
      }
    
      public guardarAjustes(){
        localStorage.setItem('ajustes',JSON.stringify(this.ajustes)); //Convertir en string un objeto;
      }
      
      public cargarAjustes(){
        if(localStorage.getItem('ajustes')){
          this.ajustes= JSON.parse(localStorage.getItem('ajustes'));    //Convertir un string en un objeto;
          this.aplicarTema(this.ajustes.tema);
        }else{
          this.aplicarTema(this.ajustes.tema);
        }
      }
    
      public aplicarTema(tema:string){
        let url= `assets/css/colors/${tema}.css`
        document.getElementById('tema').setAttribute('href',url);
    
        this.ajustes.tema=tema;
        this.ajustes.temaUrl=url;
    
        this.guardarAjustes();
      }

}

interface Ajustes{
    temaUrl:string;
    tema:string;
  }