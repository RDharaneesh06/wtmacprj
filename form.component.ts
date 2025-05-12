import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formData = {
    name: '',
    phone: '',
    date: '',
    variation: '',
    estateName: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
  this.http.post('http://localhost:5000/api/inquiries', this.formData).subscribe(
    (response) => {
      alert('Form submitted successfully!');
      this.formData = { name: '', phone: '', date: '', variation: '', estateName: '' }; // Reset form
    },
    (error) => {
      alert('Failed to submit the form.');
      console.error(error);
    }
  );
  }
}