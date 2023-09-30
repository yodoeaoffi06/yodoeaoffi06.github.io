import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit{

  constructor(private interestsService : InterestsService) {}

  jsonData: any[] = []; 

  ngOnInit() : void {
    this.interestsService.getInterests()
    .subscribe( (data: any) =>  {
      console.log(data);
      alert(data)

      this.jsonData = data;
    })
    
  }
}
