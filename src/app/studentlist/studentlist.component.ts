import { StudentServiceService } from './../Service/student-service.service';
import { Component, OnInit } from '@angular/core';
import { StudentClass } from '../Classes/student-class';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentclass: StudentClass;

  constructor(private route: ActivatedRoute, private router: Router, private studentservice: StudentServiceService) {
    this.studentclass = new StudentClass();
  }

  ngOnInit() {
  }
  save() {
    this.studentservice.save(this.studentclass).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/']);
  }
}
