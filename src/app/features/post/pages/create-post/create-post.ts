import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPostService } from '../../services/blog-post.service';
import { MarkdownModule } from 'ngx-markdown';
import { tap } from 'rxjs';
import { ImageService } from '../../../../shared/image.service';
import { getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule, MarkdownModule],
  templateUrl: './create-post.html',
})
export class CreatePost {
  blogPostService = inject(BlogPostService);
  imageService = inject(ImageService);

  contentData = signal('');
  imageMessage = signal<string | undefined>(undefined);

  fb = inject(FormBuilder);

  formPost: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    content: ['', [Validators.required, Validators.maxLength(2000)]],
    coverImgUrl: ['', [Validators.required]],
  });

  get title() {
    return this.formPost.controls['title'];
  }

  get content() {
    return this.formPost.controls['content'];
  }

  get coverImgUrl() {
    return this.formPost.controls['coverImgUrl'];
  }

  constructor() {
    this.formPost
      .get('content')
      ?.valueChanges.pipe(tap((value) => this.contentData.set(value)))
      .subscribe();
  }

  // Create a blog post
  onFormSubmit() {
    if (this.formPost.invalid) return;

    this.blogPostService.createPost(this.title.value, this.content.value, this.coverImgUrl.value);
    this.formPost.reset();
    this.contentData.set('');
    this.imageMessage.set(undefined);
  }

  onCoverImageSelected(e: HTMLInputElement) {
    if (!e.files || e.files.length <= 0) return;

    const file: File = e.files[0];
    this.imageService.uploadImage(file.name, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadUrl) => {
        this.formPost.controls['coverImgUrl'].patchValue(downloadUrl);
        this.imageMessage.set('Imagen cargada correctamente!');
      });
    });
  }
}
