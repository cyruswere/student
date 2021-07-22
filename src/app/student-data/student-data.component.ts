import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  constructor() { }

  studentData = [
    {name: "cyrus", cohort: "MC43/44",attendance: "70" },
    {name: "cyrus", cohort: "MC43/44",attendance: "70" },
    {name: "cyrus", cohort: "MC43/44",attendance: "70" },
    {name: "cyrus", cohort: "MC43/44",attendance: "70" },
  ]

  ngOnInit(): void {
  }

}
