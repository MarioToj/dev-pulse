import { inject, Injectable } from '@angular/core';
import { ref, Storage, uploadBytesResumable, UploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  firebaseStorage = inject(Storage);

  uploadImage(fileName: string, image: File): UploadTask {
    const storageRef = ref(this.firebaseStorage, `images/${fileName}`);
    return uploadBytesResumable(storageRef, image);
  }
}
