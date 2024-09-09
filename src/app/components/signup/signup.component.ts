import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirebaseApp } from '@angular/fire/app';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private auth: Auth) {}

  onSignup(event: Event) {
    event.preventDefault();

    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

  createUserWithEmailAndPassword(this.auth, this.email,this.password)
    .then((userCredential)=>{
      const user =userCredential.user;
      console.log('User signed up:', user);
      alert('User signed up:')
      
    })
    .catch((error)=>{
      const errorCode =error.code;
      const errorMessage= error.message;
      console.error(`Error [${errorCode}]; ${errorMessage}`)
    })
  }
  }
