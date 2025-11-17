import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})
export class SidebarComponent {
  @Output() sendItem = new EventEmitter<string>();
  activeItem: string='';
  
  setActiveItem(item: string) {
    this.activeItem = item;
    this.sendItem.emit(item);
  }
}
