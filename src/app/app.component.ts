import { Component } from '@angular/core';
export interface styleStruct{
  'background-color':string

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
                          style:{'background-color':'green' }
                        },
                        { name:"banana",
                        style:{'background-color':'yellow' }
                      },
                      { name:"apple",
                      style:{'background-color':'red' }
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
