import { Component } from '@angular/core';

export interface myInterface {
  removeComponent(index: number);
}

@Component({
  templateUrl: './dynamic.component.html'
})

export class DynamicComponent {

  public index: number;
  public selfRef: DynamicComponent;
  public compInteraction: myInterface;

  constructor() {
  }


  public removeComponent(index: number) {
    this.compInteraction.removeComponent(index);
  }

}
