import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic-components/dynamic.component';
import { ParentComponent } from './dynamic-components/parent-component/parent.component';

@NgModule({
  declarations: [
    AppComponent, DynamicComponent, ParentComponent
  ],
  imports: [
    BrowserModule,

  ],
  entryComponents: [ DynamicComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
