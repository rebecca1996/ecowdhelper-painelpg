import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//rebeccca interação
import {Painel} from '../painel/painel';



@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  styleUrls: ['login.css']
})
export class Login {

  constructor(public navCtrl: NavController) {



  }

  public login (){

    //verificação das crendenciaisi vão aqui

    this.navCtrl.push(Painel);

  }

}
