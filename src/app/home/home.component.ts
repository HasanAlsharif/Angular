import { Component, OnInit, Input } from '@angular/core';

@Component({
  // use the selector as a tag name in another component's html file to render the component inside
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() newTitle: string = '';

  // favFoods: string[] = ['Pizza', 'Brosted', 'Sushi'];
  // email: string = "";

  // showFood(food:string):void{
  //   console.log('FOOD:',food)
  // }

  show:boolean = true;
  // class constructor
  constructor() {}

  // a life cycle method that runs when the component is initialized
  ngOnInit(): void {}

 
}
