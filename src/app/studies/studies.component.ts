import { Component , OnInit} from '@angular/core';
import { StudiesService } from '../services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  constructor(private studiesService : StudiesService) {}

  jsonData: any[] = []; 

  ngOnInit() : void {
    this.studiesService.getStudies()
    .subscribe( (data: any) =>  {
      console.log(data);
      alert(data)

      this.jsonData = data;
    })
    
  }
}
