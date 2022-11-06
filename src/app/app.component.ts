import { Component, ElementRef, ViewChild } from '@angular/core';
import { AddressTp, PersonTp } from './personData.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrstTask';
  IsStudent : boolean =true ;
  @ViewChild('getStatus') Status! : ElementRef ;

person : PersonTp ; 
MyAddress : AddressTp ;
   constructor()
   {

     this.MyAddress = 
     {
      street: "Norberto Crossing",
          suite: "Apt. 950",
          city: "South Christy",
          zipcode: '23505-1337',
     }
       
      this.person =
      {
        name: "Dennis Schulist",
        isStudent: false,
        email: "Karley_Dach@jasper.info",
        address: this.MyAddress
   }

  
} 
 setStatus () 
 {
    this.person.isStudent=this.IsStudent; 
 }

 ngAfterViewInit(): void {
  console.log(this.Status.nativeElement.innerHTML)
}

}
