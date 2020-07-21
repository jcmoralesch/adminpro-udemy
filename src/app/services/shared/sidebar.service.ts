import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any=[
    {
      titulo:'Principal',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Dashboard',url:'/dashboard'},
        {titulo:'ProgessBar',url:'/progress'},
        {titulo:'Graficas',url:'/graficas1'},
        {titulo:'AccountSettings',url:'/account-settings'},
        {titulo:'Promesas',url:'/promesas'},
        {titulo:'Rxjs',url:'/rxjs'},

      ]
    }
  ]

  constructor() { }

}