import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() { }
  

  ngAfterViewInit(){
    this.jQuery();

    
  }
  //função responsavel por iniciar as chamadas das Funções do Jquery
  jQuery(){
    let flag = true;
    $(document).ready(function(){
       changeButtons();
       
        $('.modal').modal();
      
           
    });

    //função responsavel por aplicar as regra de negocio aos botões.
    function changeButtons(){

      //checkbox modal.
      $('#confirma').attr('disabled', true);
      
      $('#aceita').change(function(){
        if(flag===true){
        $('#confirma').removeAttr('disabled');  
        flag = false;
      }
      else{
        $('#confirma').attr('disabled', true);
        flag = true;
      }


      });

      //escondendo o card.
      $('#confirma').on('click',function(){$('[name=cartao]').hide();});
    }


  }
}
