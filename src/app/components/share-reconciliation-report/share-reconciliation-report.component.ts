import { Component, inject } from '@angular/core';
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  Storage,
} from '@angular/fire/storage';
import { getAuth, Auth } from '@angular/fire/auth'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Url } from 'url';

interface Shareholder {
  name: string;
  shares: number;
  reconciled: boolean;
  image:Url
}

@Component({
  selector: 'app-share-reconciliation-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './share-reconciliation-report.component.html',
  styleUrls: ['./share-reconciliation-report.component.css'],
})

export class ShareReconciliationReportComponent {
  storage: Storage = inject(Storage);
  auth: Auth = inject(Auth);
  selectedFile: File | null = null;
  items: Shareholder[] = []; 

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async onSubmit() {
    const user = this.auth.currentUser;
    if (!user) {
      console.error('User is not authenticated.');
      return;
    }

    if (this.selectedFile) {
      try {
        const storageRef = ref(
          this.storage,
          `uploads/${this.selectedFile.name}`
        );
        const uploadTask = uploadBytesResumable(storageRef, this.selectedFile);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          },
          (error) => {
            console.error('Error uploading file:', error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log('File available at', downloadURL);
            } catch (err) {
              console.error('Error getting download URL:', err);
            }
          }
        );
      } catch (error) {
        console.error('Error during file upload:', error);
      }
    } else {
      console.error('No file selected.');
    }
  }
}