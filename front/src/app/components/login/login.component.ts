import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    usuario: "",
    password: ""
  };

  contador = 0;

  constructor(private authService: AuthService, private routerService: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.authService.isLogged()? this.routerService.navigate(['/home']) : console.log("No está logeado");
  }

  login(){
    if(this.loginData.password! && this.loginData.usuario!){
      this.authService.login(this.loginData).subscribe((respuesta)=>{
        if((respuesta as any).token){
          //localStorage.setItem("token", (respuesta as any).token);
          this.authService.saveLoginToken((respuesta as any).token);
          this.toastrService.success((respuesta as any).msg)
          this.routerService.navigate(['/gestion']);
        }else{
          this.toastrService.error((respuesta as any).msg)
        }
      })
    }
  }

  /*borrarData(){
    this.loginData.usuario =""
    this.loginData.password=""
  }*/

}
