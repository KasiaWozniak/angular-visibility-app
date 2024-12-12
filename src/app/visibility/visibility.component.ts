import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.css']
})
export class VisibilityComponent implements OnInit {
  isVisible = false; // Flaga informująca, czy formularz ma być widoczny
  items = [];

  constructor() {}

  ngOnInit(): void {
    // Pobieranie danych z serwera JSON
    fetch('http://localhost:3000/items')
      .then(response => response.json())
      .then(data => {
        this.items = data;
      });
  }

  // Funkcja wywoływana, kiedy element staje się widoczny
  onVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;
  }

}
