import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { NgIf } from '@angular/common'; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ShalomRestaurant');
  showContact = false;
}
