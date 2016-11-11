import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1 } from './keyup.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ClickMeComponent, KeyUpComponent_v1 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
