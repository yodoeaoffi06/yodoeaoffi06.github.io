import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  constructor(private workExperienceService : WorkExperienceService) {}

  puesto: string = "fake cargo 1";
  empresa: string = "fake empresa 1";
  fecha_ini: string ="fake fecha ini";
  fecha_fin: string = "fake fecha fin";
  ciudad: string = "fake ciudad 1";
  pais: string = "fake pais 1";
  logros: any[] = []; 

  ngOnInit() : void {
    this.workExperienceService.getWorkExperience()
    .subscribe( (data: any) =>  {
      console.log(data);
      alert(data)

      this.puesto = data.puesto;
      this.empresa = data.empresa;
      this.fecha_ini = data.fecha_ini;
      this.fecha_fin = data.fecha_fin;
      this.ciudad = data.ciudad;
      this.pais = data.pais;
      this.logros = data.logros;
    })
    
  }
}
