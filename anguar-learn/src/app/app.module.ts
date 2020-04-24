import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavigationComponent } from './Navigation/navigation.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgxEchartsModule } from 'ngx-echarts';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // NavigationComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // NgbModule,
    // NgxEchartsModule,
    // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
