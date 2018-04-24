import { Component, OnInit } from '@angular/core';
import { PerguntasService } from '../perguntas.service';

@Component({
  selector: 'app-tela-final',
  templateUrl: './tela-final.component.html',
  styleUrls: ['./tela-final.component.css']
})
export class TelaFinalComponent implements OnInit {

  perguntas: Array<any>;
  respostas: Array<any>;

  
  constructor(private perguntasService : PerguntasService) { }

  ngOnInit() {

    this.getInfo();
    
  }
  
  getInfo(){

    this.perguntasService.emitirRespostas.subscribe(
      resposta => this.respostas = resposta
   );

    this.perguntas = this.perguntasService.getPerguntasCheckBox();
  }

}
