import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

   slides = [{'image': '../../assets/barstat-1.jpg'}, {'image': '../../assets/barstat-2.jpg'}];

  constructor(private titleSerivce: Title) { }

  ngOnInit(): void { this.titleSerivce.setTitle('Projects | Steven Wong');}
}
