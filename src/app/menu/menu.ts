import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-menu',
 imports: [NgForOf],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
 selectedCategory = 'All';

  menuItems = [
    {
      name: 'Veg Noodles',
      type: 'Veg',
      location: 'Shalom Restaurant',
      price: 50.00,
      image: 'noodles.jpg'
    },
    {
      name: 'Mutton Biriyani',
      type: 'Non-Veg',
      location: 'Shalom Restaurant',
      price: 255.00,
      image: 'biriyani.jpg'
    },
    {
      name: 'Veg Manchuria',
      type: 'Veg',
      location: 'Shalom Restaurant',
      price: 75.00,
      image: 'manhuria.jpg'
    },
    {
      name: 'Chicken Biriyani',
      type: 'Non-Veg',
      location: 'Shalom Restaurant',
      price: 215.00,
      image: 'fish.jpg'
    },
    {
      name: 'Veg Biriyani',
      type: 'Veg',
      location: 'Shalom Restaurant',
      price: 125.00,
      image: 'veg biriyani.jpg'
    },
    {
      name: 'Mushroom Biriyani',
      type: 'Veg',
      location: 'Shalom Restaurant',
      price: 225.00,
      image: 'veg biriyani.jpg'
    },
    {
      name: 'Grilled Chicken | BBQ',
      type: 'Non-Veg',
      location: 'Shalom Restaurant',
      price: 255.00,
      image: 'wings.jpg'
    },
     {
      name: 'Prawns',
      type: 'Non-Veg',
      location: 'Shalom Restaurant',
      price: 275.00,
      image: 'biriyani.jpg'
    },
     {
      name: ' Chicken Wings',
      type: 'Non-Veg',
      location: 'Shalom Restaurant',
      price: 125.00,
      image: 'wings.jpg'
    },
    {
      name: 'Paneer Biriyani',
      type: 'Veg',
      location: 'Shalom Restaurant',
      price: 200.00,
      image: 'veg biriyani.jpg'
    },
    {
      name: 'Potato Springs',
      type: 'Veg',
      location: 'Shalom Restaurant',
      price: 60.00,
      image: 'veg biriyani.jpg'
    },
    {
      name: 'Fried Fish',
      type: 'Non-Veg',
      location: 'Shalom Restaurant',
      price: 200.00,
      image: 'fish.jpg'
    },
     {
      name: 'Special-Biriyani',
      type: 'Specials',
      location: 'Shalom Restaurant',
      price: 225.00,
      image: 'biriyani.jpg'
    },
    {
      name: 'Special-Dum Biriyani',
      type: 'Specials',
      location: 'Shalom Restaurant',
      price: 235.00,
      image: 'biriyani.jpg'
    },
    {
      name: 'Special Noodles',
      type: 'Specials',
      location: 'Shalom Restaurant',
      price: 95.00,
      image: 'noodles.jpg'
    },
    {
      name: 'Special Fried Fish',
      type: 'Specials',
      location: 'Shalom Restaurant',
      price: 235.00,
      image: 'fish.jpg'
    },
    // Add more items...
  ];

  filteredMenu = this.menuItems;

  filterMenu(type: string) {
    this.selectedCategory = type;
    this.filteredMenu = type === 'All'
      ? this.menuItems
      : this.menuItems.filter(item => item.type === type);
  }
}
