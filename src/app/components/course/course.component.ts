import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Course } from '../../interface/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseName: string = '';
  jsonFile: string = 'c-language';
  fileURL?: string;

  constructor(private http: HttpClient, private title: Title) { }

  ngOnInit(): void {
    this.fileURL = "assets/JSON/" + this.jsonFile + ".json";

    this.http.get<Course>(this.fileURL).subscribe((response: Course) => {
      this.courseName = response.courseName;
      this.title.setTitle("MARUTI | " + this.courseName);
    });
  }

}
