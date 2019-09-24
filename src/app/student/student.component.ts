import { StudentServiceService } from './../Service/student-service.service';
import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../Classes/student-class';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
studentclass: StudentClass[];
  constructor(private service: StudentServiceService){

  }
  ngOnInit(): void {
    this.service.findAll().subscribe(data => {this.studentclass = data; });

  }
  public findAll(){
    this.service.findAll().subscribe(data => {this.studentclass = data; });
  }

  }

