import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  formData = {
    fullname: '',
    email: '',
    password: '',
    phoneno: '',
    birthdate: '',
    address: ''
  };
  
  Fruits:any = ['apple','Banana','Cherries','Figs','Grapes','Mango','Orange','Strawberries']
  isvalid = true;
  onchange(val:any){
  this.isvalid = val;
  }
  constructor(private router: Router) {}
  submit(){
  this.router.navigate(['/']); 
  }
  submitForm()
    {

    }
  
}