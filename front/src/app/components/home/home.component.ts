import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged: boolean = false;

  constructor(public authService: AuthService) {
    this.isLogged = this.authService.isLogged();
   }

  ngOnInit(): void {
    
  }

  lanzarAlerta(){
    alert("Me dieron click!")
  }

}
