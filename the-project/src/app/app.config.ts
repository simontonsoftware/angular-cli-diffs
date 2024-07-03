import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"private-bounce","appId":"1:941927105392:web:33ffd05d1bfaac215ac5b5","databaseURL":"https://private-bounce.firebaseio.com","storageBucket":"private-bounce.appspot.com","apiKey":"AIzaSyDo7gRQWR1kGNVo7_2iU8Ox3VUIGCZB0TU","authDomain":"private-bounce.firebaseapp.com","messagingSenderId":"941927105392"})), provideFirestore(() => getFirestore())]
};
