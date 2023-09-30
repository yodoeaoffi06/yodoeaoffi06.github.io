import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(private skillsService : SkillsService) {}

  jsonData: any[] = []; 

  ngOnInit() : void {
    this.skillsService.getSkills()
    .subscribe( (data: any) =>  {
      console.log(data);
      alert(data)

      this.jsonData = data;
    })
    
  }
}
