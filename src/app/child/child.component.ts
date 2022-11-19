import { Component, Input, OnInit } from '@angular/core';
import { AddressTp } from '../personData.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ber : number = 12.345677; 
  @Input() AddresFromParents! : AddressTp ;
  constructor() 
  {
    this.AddresFromParents =
    {
      street: "Default Street From Child ",
      suite: "Default Suite From Child ",
      city: "Default City From Child ",
      zipcode: 'Default Zipcode From Child ',
    }

 } 

  ngOnInit(): void {
  }

}
