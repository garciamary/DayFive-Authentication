
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AppAuthService } from '../app-auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup ;


  constructor(private _appAuthService:AppAuthService, private _router:Router) {
    this.loginForm = new FormGroup ({
      username: new FormControl ("", [Validators.required]),
      password: new FormControl ("", [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.loginForm.valid){
      Swal.showLoading();
      console.log(this.loginForm.value);
      this._appAuthService.login(this.loginForm.value).subscribe(
        (login: any) => {
          console.log(login);
          this._appAuthService.setSession(login.data.token);
          Swal.hideLoading();
          console.log(login.data.token);
          this._router.navigate(['/']);
        }
      )
    }
  }

}
