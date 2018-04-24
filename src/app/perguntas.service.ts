import { Injectable, EventEmitter } from '@angular/core';



@Injectable()
export class PerguntasService{

    private perguntasCheck: any [] = [
    { pergunta :'Qual o seu  comportamento em relação aos  seus investimentos ?', resposta_1: 'Preservar meus investimentos sem correr riscos', resposta_2:'Ganhar mais dinheiro assumindo riscos moderados',resposta_3:'Ganhar  mais dinheiro assumindo riscos agressivos',id_1: '1', id_2:'2',id_3:'3'},
    { pergunta:'Por quanto tempo  você deseja manter os seus investimentos ? ',resposta_1:'Até 1 ano',resposta_2:'De 1 a 3 anos',resposta_3:'De 3 a 8 anos',id_1: '4', id_2:'5',id_3:'6'},
    { pergunta :'Quantos % você precisa desse investimento em 1 ano? ', resposta_1:'Acima de 75%',resposta_2:'De 26% a 74%',resposta_3:'Até 25%',id_1: '7', id_2:'8',id_3:'9' }];
    private options : string [] = ['1- Nunca operei','2- Opero pouco e não tenho familiaridade','3- Opero eventualmente e conheço os riscos associados','4- Opero frequentemente e conheço os riscos associados'];
    respostas: Array<any>;
 
    emitirRespostas = new EventEmitter<any>();

    getPerguntasCheckBox(){

        return this.perguntasCheck;

    }

    getOpitionsCombo(){

        return this.options;

    }

    addRespostas(resposta : any){     

        this.emitirRespostas.emit(resposta);
    }


 

}