import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonLoading, IonItem,IonList ,IonInput,IonIcon} from '@ionic/angular/standalone';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonLoading,IonButton,IonList ,IonInput,ReactiveFormsModule,IonIcon]
})
export class LoginPage implements OnInit {

  @ViewChild('content') content!:ElementRef;

  constructor(private loadingCtrl: LoadingController) { }

 ngOnInit(): void {
     this.showLoading();
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

}
