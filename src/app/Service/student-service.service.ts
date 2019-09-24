import { Injectable } from '@angular/core';
import { StudentClass } from '../Classes/student-class';
// import { HttpClient } from '@angular/common/http';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<StudentClass[]> {
    return this.http.get<StudentClass[]>('http://localhost:8080/showme');
  }

save(studentclass: StudentClass) {
    return this.http.post<StudentClass>('http://localhost:8080/newstud', studentclass);
  }

  update(studentclass: StudentClass) {
    return this.http.post<StudentClass>('http://localhost:8080/addStudent', studentclass);
  }
    handelresponse(response): Promise<any> {
    return Promise.resolve(response);
    }
}
