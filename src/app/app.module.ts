import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
// import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";

@NgModule({
  declarations: [
    AppComponent,
    // ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
