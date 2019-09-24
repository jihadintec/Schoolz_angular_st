import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentServiceService } from './Service/student-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentlistComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
