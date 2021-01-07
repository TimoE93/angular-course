import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpBComponent } from "./service/cmp-b.component";
import { CmpAComponent } from "./service/cmp-a.component";
import { ServiceComponent } from "./service/service.component";
import { DataService } from "./service/data.service";

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
