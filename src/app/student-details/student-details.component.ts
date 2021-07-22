import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor() { }

  studentDetails = [
    {name: "cyrus", cohort: "MC43/44",attendance: "70", IP:"20"},
    {name: "cyrus", cohort: "MC43/44",attendance: "70", IP:"20" },
    {name: "cyrus", cohort: "MC43/44",attendance: "70", IP:"20" },
    {name: "cyrus", cohort: "MC43/44",attendance: "70", IP:"20" },
    {name: "cyrus", cohort: "MC43/44",attendance: "70", IP:"20" },
  ]

  ngOnInit(): void {
  }

}
