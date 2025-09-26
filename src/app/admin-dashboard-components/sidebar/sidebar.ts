import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
    @Output() sendItem = new EventEmitter<string>();
    activeItem: string='Dashboard';
    setActiveItem(item: string) {
    this.activeItem = item;
    this.sendItem.emit(item);
}
}
