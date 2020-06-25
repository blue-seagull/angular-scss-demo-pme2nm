import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeeklyPatternComponent} from './weekly-pattern/WeeklyPatternComponent'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WeeklyPatternComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
