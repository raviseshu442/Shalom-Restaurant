import { ChangeDetectorRef, Component, inject, NgZone, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { NgIf ,NgFor} from '@angular/common'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,NgIf,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShalomRestaurant');
  showContact = false;
  images = ['image1.jpg','zoo.jpg','3.jpg','6.jpg'];
   currentIndex = 0;

  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.zone.run(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
          this.cdr.detectChanges(); // Force update
        });
      }, 3000);
    });
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.cdr.detectChanges(); // Make sure to update manually
  }
}
