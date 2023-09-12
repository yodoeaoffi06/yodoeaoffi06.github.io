import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../services/certifications.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit{

  constructor(private certificationsService : CertificationsService) {}

  jsonData: any[] = []; 

  ngOnInit() : void {
    this.certificationsService.getCertifications()
    .subscribe( (data: any) =>  {
      console.log(data);
      alert(data)

      this.jsonData = data;
    })
  }
}
