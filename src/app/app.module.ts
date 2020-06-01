import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AssignthreeComponent } from './assignthree/assignthree.component';



@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    DatabindingComponent,
    AssignthreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
