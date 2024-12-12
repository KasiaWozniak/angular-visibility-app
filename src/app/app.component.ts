import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisibilityDirective } from './visibility.directive';  // Import dyrektywy

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, VisibilityDirective],  // Importujemy potrzebne moduły
  styleUrls: ['./app.component.css']  // Zmienione na styleUrls
})
export class AppComponent {
  title = 'angular-visibility-app';
  formVisible = false;  // Zmienna kontrolująca widoczność formularza

  // Zmienna do przechowywania danych z formularza
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Metoda uruchamiana, gdy sekcja stanie się widoczna
  onSectionVisible(): void {
    console.log('Sekcja jest widoczna');
    this.showForm();  // Wykonaj jakąś akcję, np. pokaż formularz
  }

  // Akcja uruchamiająca wysunięcie formularza
  showForm() {
    this.formVisible = !this.formVisible;  // Toggle formularza
    console.log('Widoczność formularza:', this.formVisible);
  }
  

  // Metoda obsługująca wysłanie formularza
  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Formularz wysłany:', this.formData);
      alert('Formularz został wysłany!');
      
      // Resetowanie formularza po wysłaniu
      this.formData = { name: '', email: '', message: '' };
    }
  }
}
