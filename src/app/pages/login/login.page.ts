import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormControl, FormsModule,ReactiveFormsModule,FormGroup,Validators, FormBuilder } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonLoading, IonItem,IonList ,IonInput,IonIcon} from '@ionic/angular/standalone';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonLoading,IonButton,IonList ,IonInput,ReactiveFormsModule,IonIcon,NgIf]
})
export class LoginPage implements OnInit {

  @ViewChild('content') content!:ElementRef;
  @ViewChild('bForm') bForm!:ElementRef;

  constructor(private loadingCtrl: LoadingController ,private router:Router) { }

  brokerForm = new FormGroup({
    userName:new FormControl('' ,Validators.required),
    password: new FormControl('',Validators.required)
  })

 ngOnInit(): void {
     this.showLoading();
 }

 get userName() {
  return this.brokerForm.get('userName');
 }

 get password() {
  return this.brokerForm.get('password');
 }

 async showLoading() {
  const loading = await this.loadingCtrl.create({
    message: 'Welcome...',
    duration: 3000,
  });

  await loading.present();

  await loading.onDidDismiss();

  this.content.nativeElement.style.visibility = 'visible';
 }

 onSubmit(){
  console.log(this.brokerForm.value);

  this.router.navigate(['/home']);
 }

}
