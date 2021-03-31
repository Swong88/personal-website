import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  skills = [{
    skill_name: 'TYPESCRIPT',
    type: 'WEB DEVELOPMENT',
    isLanguage: true
  },
  {
    skill_name: 'JAVASCRIPT',
    type: 'WEB DEVELOPMENT',
    isLanguage: true
  },
  {
    skill_name: 'HTML + CSS/SCSS',
    type: 'WEB DEVELOPMENT',
    isLanguage: true
  }, {
    skill_name: 'ANGULAR',
    type: 'WEB DEVELOPMENT'
  }, {
    skill_name: 'NODE.JS',
    type: 'WEB DEVELOPMENT'
  }, {
    skill_name: 'EXPRESS.JS',
    type: 'WEB DEVELOPMENT'
  }, {
    skill_name: 'POSTGRESQL/SQL',
    type: 'DATABASES'
  }, {
    skill_name: 'MONGODB',
    type: 'DATABASES'
  }, {
    skill_name: 'FIREBASE',
    type: 'DATABASES'
  }, {
    skill_name: 'GRAPHQL',
    type: 'DATABASES'
  }, {
    skill_name: 'HADOOP',
    type: 'DATA ENGINEERING'
  }, {
    skill_name: 'SPARK',
    type: 'DATA ENGINEERING'
  },
  {
    skill_name: 'PANDAS',
    type: 'DATA ENGINEERING'
  },
  {
    skill_name: 'MATLAB',
    type: 'DATA ENGINEERING'
  },
  {
    skill_name: 'DATA VISUALIZATION',
    type: 'DATA ENGINEERING'
  },
  {
    skill_name: 'XCODE',
    type: 'MOBILE DEVELOPMENT'
  },
  {
    skill_name: 'SWIFT',
    type: 'MOBILE DEVELOPMENT',
    isLanguage: true
  },
  {
    skill_name: 'ANDROID STUDIO',
    type: 'MOBILE DEVELOPMENT'
  },
  {
    skill_name: 'JAVA',
    type: 'MOBILE DEVELOPMENT',
    isLanguage: true
  },
  {
    skill_name: 'XML',
    type: 'MOBILE DEVELOPMENT',
    isLanguage: true
  },
  {
    skill_name: 'PYTHON',
    isLanguage: true
  },
  {
    skill_name: 'C#',
    isLanguage: true
  },
];

courses = [
{
  course_id: 'CSC 2259',
  course_name: 'Discrete Structures',
  link: ''
},{
  course_id: 'CSC 2262',
  course_name: 'Numerical Methods',
  link: ''
},{
  course_id: 'CSC 2730',
  course_name: 'Data Science and Analytics',
  link: ''
},
{
  course_id: 'CSC 3102',
  course_name: 'Advanced Data Structures and Algorithm Analysis',
  link: ''
},{
  course_id: 'CSC 3501',
  course_name: 'Computer Organization and Design',
  link: ''
},
{
  course_id: 'CSC 3380',
  course_name: 'Object Oriented Design',
  link: ''
},
{
  course_id: 'CSC 4103',
  course_name: 'Operating Systems',
  link: ''
},{
  course_id: 'CSC 4402',
  course_name: 'Database Systems',
  link: ''
},{
  course_id: 'CSC 4501',
  course_name: 'Computer Networks',
  link: ''
},{
  course_id: 'CSC 4330',
  course_name: 'Software System Development',
  link: ''
},{
  course_id: 'CSC 4101',
  course_name: 'Programming Languages',
  link: ''
},
{
  course_id: 'CSC 4740',
  course_name: 'Big Data Technologies',
  link: ''
},
]

  filteredSkills : any[] = [];
  selectedItem: string = 'ALL'

  constructor(private titleSerivce: Title) { }

  
  innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }


  ngOnInit(): void {
    this.titleSerivce.setTitle('Resume | Steven Wong');
    this.selectItem("ALL");
  }

  selectItem(item: string){

    this.filteredSkills = this.skills;
    this.selectedItem = item;

    if(item === 'ALL'){
      this.filteredSkills = this.skills;
    }else if(item === 'LANGUAGES'){
      this.filteredSkills = this.filteredSkills.filter(entry => {
        return entry.isLanguage;
      });
    }else{
      this.filteredSkills = this.filteredSkills.filter(entry => {
        return entry.type === item;
      });
    }
    this.filteredSkills.sort(function(a, b){
      if(a.skill_name < b.skill_name) { return -1; }
      if(a.skill_name > b.skill_name) { return 1; }
      return 0;
  })
  }

  isSelected(item: string): boolean{
    return item === this.selectedItem;
  }

  isMobile(){
    return innerWidth <= 750;
  }

  scrollUp(){
    window.scroll(0,0);
}
}
