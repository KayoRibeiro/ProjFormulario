import { Component, OnInit } from '@angular/core';
import { PerguntasService} from '../perguntas.service';
declare var $:any;
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  perguntas: Array<any>;
  options: Array<any>;
  constructor(private perguntasService : PerguntasService) {

    
   }
   //responsavel por emitir o formulario
   onSubmit(form){
     console.log(form);
     this.perguntasService.addRespostas(form);
   }
  ngOnInit() {
   
   this.callPerguntas();
   this.callOptions();
  }
  ngAfterViewInit(){
    this.jQuery();
  }

  //função responsavel por iniciar as chamadas das Funções do Jquery
  jQuery(){
    
    $(document).ready(function(){
      $('select').material_select();
      changeCheckBox();
      changeButtons();
      validaSubmit();
      alterarLayout();
     
    });

    function validaSubmit(){
      $('[name^=combobox_resposta], input:checkbox').change(function(){
        let retorno = true;
       

        $('input:text').each(function(){
          if($(this).val() == 'Escolha uma opção')
          retorno= false;
        });

        let cont = 0;
        $('[name^=checkbox_resposta]').each(function(index){
         
         
          if($(this).is(':checked')==true)
          ++cont;    

        });

        if(cont>2 && retorno ==true)
        $('[name=action]').removeAttr('disabled');
        else
        $('[name=action]').attr('disabled', true);
      });


    }
    function alterarLayout(){

      $('[name=action]').attr('disabled', true);
      $('[name=cartao]').hide();

    }
    function changeButtons(){

      $('[name=voltar]').on('click',function(){$('[name=cartao]').show();})

    }
    //função responsavel por fazer o checks se comportarem como radio button
    function changeCheckBox(){

      $('input:checkbox').change(function(){
        let id =$(this).attr('id');
        let data =$(this).attr('data-index');
       $(`[data-index=${data}]`).each(function(){

        if($(this).attr('id')!== id)
        $(this).prop( "checked", false );
        
       });
      
      });
    }
  }
  //Função responsavel por buscar do serviço as perguntas e alternativas que são respondidas atraves do check box.  
  callPerguntas(){
    this.perguntas = this.perguntasService.getPerguntasCheckBox();

  }
  //Função responsavel por buscar as opções dos combo box.
  callOptions(){
    this.options = this.perguntasService.getOpitionsCombo();

 
  }

}
