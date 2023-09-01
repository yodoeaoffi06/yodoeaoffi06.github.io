import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = "Yadhir Teoba"
  titles: string = "Tecnico en Programacion"
  aspirations: string = "Poder trabajar y serle de ayuda a la empresa"
  photo: string = "fake photo"
  email: string = "yadhirTV@gmail.com"
  cel: string = "(229) 968 5317"
  location: string = "Orizaba, Ver."
  social: string = "@yodoeaofi06"
}
