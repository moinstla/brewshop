import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { PintnessPipe } from './pintness.pipe';
import { TypePipe } from './type.pipe';


@NgModule({
  imports: [ BrowserModule,
            FormsModule],
  declarations: [ AppComponent,
                KegListComponent,
                EditKegComponent,
                NewKegComponent,
                PintnessPipe,
                TypePipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
