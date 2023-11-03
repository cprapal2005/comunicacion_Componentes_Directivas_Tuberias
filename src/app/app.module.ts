import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PanelComponent } from './componentes/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    CabeceraComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
