import { Component, ComponentRef, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic.component';

@Component({
  selector: 'filter-component',
  templateUrl: './parent.component.html',
  styleUrls: []
})

export class ParentComponent {
  @ViewChild('container', { read: ViewContainerRef }) VCR: ViewContainerRef;

  public index: number = 0;
  public componentsReferences = [];

  constructor(private CFR: ComponentFactoryResolver) {  }

  public addComponent() {
    const componentFactory = this.CFR.resolveComponentFactory(DynamicComponent);
    const componentRef: ComponentRef<DynamicComponent> = this.VCR.createComponent(componentFactory);
    const currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    currentComponent.compInteraction = this;

    this.componentsReferences.push(componentRef);
  }

  public removeComponent(index: number) {
    if (this.VCR.length < 1) {
      return;
    }

    const componentRef = this.componentsReferences.filter(componentReference => componentReference.instance.index === index)[0];
    const vrcIndex: number = this.VCR.indexOf(componentRef);

    this.VCR.remove(vrcIndex);
    this.componentsReferences = this.componentsReferences.filter(componentReference => componentReference.instance.index !== index);
  }

}
