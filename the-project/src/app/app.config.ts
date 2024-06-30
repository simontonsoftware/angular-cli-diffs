import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getPerformance, providePerformance } from '@angular/fire/performance';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimationsAsync(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }), provideFirebaseApp(() => initializeApp({"projectId":"private-bounce","appId":"1:941927105392:web:33ffd05d1bfaac215ac5b5","databaseURL":"https://private-bounce.firebaseio.com","storageBucket":"private-bounce.appspot.com","apiKey":"AIzaSyDo7gRQWR1kGNVo7_2iU8Ox3VUIGCZB0TU","authDomain":"private-bounce.firebaseapp.com","messagingSenderId":"941927105392"})), providePerformance(() => getPerformance())]
};
