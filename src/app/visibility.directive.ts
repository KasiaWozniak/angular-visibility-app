import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appVisibility]',
  standalone: true,
})
export class VisibilityDirective implements AfterViewInit {
  @Output() appVisibility = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Sekcja widoczna');
          this.appVisibility.emit();
        }
      });
    }, { threshold: 0.5 });  // Możesz zmienić próg widoczności (np. 0.5 oznacza, że połowa sekcji musi być widoczna)

    observer.observe(this.el.nativeElement);
  }
  
}
