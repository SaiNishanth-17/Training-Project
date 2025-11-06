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
    searchText: string = '';
    isTableVisible=false;
    records:any[]=[];
    stats:any[]=[];
 
    ngOnChanges(): void {
      this.stats = this.adminService.getStats();
    }
   
  constructor(private adminService: AdminServices, private userService: UserRegisteringService){}
  editingEmail: string | null = null;
  editRoleValue: string = '';
 
    isProfileModalOpen: boolean = false;
    profileEdit: any = { password: '' };
 
    userData: UserData={
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      role: 'Admin',
      get initials():string{
        return (this.firstName[0] || '') + (this.lastName[0] || '');
      },
      get name(): string {
        return `${this.firstName} ${this.lastName}`.trim();
      }
    }
   
   
    ngOnInit(): void {
        const current = this.userService.decodeToken();
        if (current) {
          this.userData.firstName = current.firstname || this.userData.firstName;
          this.userData.lastName = current.lastname || this.userData.lastName;
          this.userData.email = current.email || this.userData.email;
        }
       
        this.loadData();
      }
 
    loadData() {
      this.adminService.loadSubjects().subscribe({
        next: () => {
          console.log('Subjects loaded successfully');
          this.loadUsers();
        },
        error: (err) => {
          console.error('Error fetching subjects', err);
          this.loadUsers();
        }
      });
    }
 
    loadUsers() {
      this.adminService.loadUsers().subscribe({
        next: () => {
          this.records = this.adminService.getrecords();
          this.updateStats();
        },
        error: (err) => {
          console.error('Error fetching users', err);
          this.records = this.adminService.getrecords();
          this.updateStats();
        }
      });
    }
 
    updateStats() {
      this.stats = this.adminService.getStats();
    }
 
 
 
 
    startEdit(record: any) {
      this.editingEmail = record.email;
      this.editRoleValue = record.role;
    }
 
    cancelEdit() {
      this.editingEmail = null;
      this.editRoleValue = '';
    }
 
    saveRole(record: any) {
      if (!this.editingEmail) return;
      const success = this.adminService.updateUserRole(record.email, this.editRoleValue);
      if (success) {
        this.records = this.adminService.getrecords();
        this.updateStats();
      }
      this.cancelEdit();
    }
 
    deleteRecord(record: any) {
      const firstName = record.firstname || record.firstName;
      const lastName = record.lastname || record.lastName;
      const confirmed = confirm(`Delete user ${firstName} ${lastName}?`);
      if (!confirmed) return;
      const success = this.adminService.deleteUserByEmail(record.email);
      if (success) {
        this.records = this.adminService.getrecords();
        this.updateStats();
      }
    }
 
 
   
 
 
    onViewAll(){
      this.isTableVisible=!this.isTableVisible;
    }
 
    onSearch(event: Event){
      this.searchText=(event.target as HTMLInputElement).value;
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