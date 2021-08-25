import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import FormsModule to be able to use the ngModel directive
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  // add FormsModule to imports
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
