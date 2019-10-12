import { Component } from '@angular/core';
export interface styleStruct{
  'background-color':string;
  'color':string;  
  'margin-top':string;
  'height':string;
}

export interface fruitStruct {
     name:string;

     style:styleStruct;


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'swap';

  fruits :fruitStruct[]=[
                        { name:"lemon",
                          
                          style:{'background-color':'green','color':'yellow','margin-top':'10px','height':'35px' }
                        },
                        { name:"banana",
                        style:{'background-color':'yellow','color':'green','margin-top':'10px', 'height':'35px' }
                      },
                      { name:"apple",
                      style:{'background-color':'red','color':'white','margin-top':'10px' ,'height':'35px' }
                    }


          
          ];
  
 size:number= this.fruits.length-1;
 block:boolean=true;

  clickUp(index:number){
      [this.fruits[index],this.fruits[index-1]]=[this.fruits[index-1],this.fruits[index]];
  }

  clickDown(index:number){
    [this.fruits[index],this.fruits[index+1]]=[this.fruits[index+1],this.fruits[index]];
  }
}
