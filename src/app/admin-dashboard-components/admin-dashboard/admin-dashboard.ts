import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipePipe } from './search-filter-pipe-pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminServices } from '../../Services/admin-services';
import { UserRegisteringService } from '../../Services/user-registering-service';

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  readonly initials: string;
  readonly name: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, FormsModule, SearchFilterPipePipe, RouterModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard {
  searchText = '';
  isTableVisible = false;
  records: any[] = [];
  stats: any[] = [];
  editingEmail: string | null = null;
  editingUserId: string | null = null;
  editRoleValue = '';
  isProfileModalOpen = false;
  profileEdit: any = {};

  userData: UserData = {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@example.com',
    role: 'Admin',
    get initials(): string {
      return (this.firstName[0] || '') + (this.lastName[0] || '');
    },
    get name(): string {
      return `${this.firstName} ${this.lastName}`.trim();
    }
  };

  constructor(private adminService: AdminServices, private userService: UserRegisteringService) {}

  ngOnInit(): void {
    const current = this.userService.getCurrentUser();
    if (current) {
      this.userData.firstName = current.firstname || this.userData.firstName;
      this.userData.lastName = current.lastname || this.userData.lastName;
      this.userData.email = current.email || this.userData.email;
    }
    this.loadData();
  }

  loadData() {
    this.adminService.loadSubjects().subscribe({
      next: () => this.loadUsers(),
      error: () => this.loadUsers()
    });
  }

  loadUsers() {
    this.adminService.loadUsers().subscribe({
      next: () => {
        this.records = this.adminService.getRecords();
        this.stats = this.adminService.getStats();
      },
      error: () => {
        this.records = this.adminService.getRecords();
        this.stats = this.adminService.getStats();
      }
    });
  }

  startEdit(record: any) {
    this.editingEmail = record.email;
    this.editingUserId = record._id;
    this.editRoleValue = record.role;
  }

  cancelEdit() {
    this.editingEmail = null;
    this.editingUserId = null;
    this.editRoleValue = '';
  }

  saveRole(record: any) {
    if (!this.editingUserId) return;
    this.adminService.updateUserRole(this.editingUserId, this.editRoleValue.toLowerCase()).subscribe({
      next: () => {
        this.loadData();
        this.cancelEdit();
      },
      error: (err) => {
        alert(err.error?.message || 'Failed to update role');
        this.cancelEdit();
      }
    });
  }

  deleteRecord(record: any) {
    const firstName = record.firstname || record.firstName;
    const lastName = record.lastname || record.lastName;
    if (!confirm(`Delete user ${firstName} ${lastName}?`)) return;
    
    this.adminService.deleteUserById(record._id).subscribe({
      next: () => this.loadData(),
      error: (err) => alert(err.error?.message || 'Failed to delete user')
    });
  }
  
  onViewAll() {
    this.isTableVisible = !this.isTableVisible;
  }

  onSearch(event: Event) {
    this.searchText = (event.target as HTMLInputElement).value;
  }

  openProfileModal() {
    this.profileEdit = {
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      email: this.userData.email,
      role: this.userData.role
    };
    this.isProfileModalOpen = true;
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
    this.profileEdit = {};
  }

  saveProfile() {
    this.userData.firstName = this.profileEdit.firstName || this.userData.firstName;
    this.userData.lastName = this.profileEdit.lastName || this.userData.lastName;
    const user = this.userService.getUserByEmail(this.userData.email);
    if (user) {
      user.firstname = this.userData.firstName;
      user.lastname = this.userData.lastName;
    }
    this.closeProfileModal();
  }
}
