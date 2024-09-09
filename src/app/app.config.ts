import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDIWeftrTAVbIms4GGP6ZMUTFTj32811OI',
  authDomain: 'lakhveer-e9ad9.firebaseapp.com',
  projectId: 'lakhveer-e9ad9',
  storageBucket: 'lakhveer-e9ad9.appspot.com',
  messagingSenderId: '124724980617',
  appId: '1:124724980617:web:d0227ea4a571470d5a4f58',
  measurementId: 'G-K8VECH3BX5',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
    ),
  ],
};
