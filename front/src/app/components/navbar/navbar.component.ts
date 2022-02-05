import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "NodeHouse";
  isLogged = false;
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.title == "NodeHouse" ? this.title = "Nuevo titulo" : this.title = "NodeHouse"
    },2000);
    this.authService.isLoggedObserver().subscribe((isLogged)=>{
      console.log("Cambió estado");
      this.isLogged = isLogged;
    })
  }

  ngOnChanges(): void{
    console.log("Cambios")
  }

  logout(){
    this.authService.logout();
  }

}
