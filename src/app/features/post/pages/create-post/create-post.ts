import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-create-post',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.html',
})
export class CreatePost {
  blogPostService = inject(BlogPostService);

  fb = inject(FormBuilder);

  formPost: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    content: ['', [Validators.required, Validators.maxLength(2000)]],
  });

  get title() {
    return this.formPost.controls['title'];
  }

  get content() {
    return this.formPost.controls['content'];
  }
  // Create a blog post
  onFormSubmit() {
    if (this.formPost.invalid) return;

    this.blogPostService.createPost(this.title.value, this.content.value);
  }
}
