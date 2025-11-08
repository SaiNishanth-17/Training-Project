import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserRegisteringService } from '../Services/user-registering-service';
import { Router } from '@angular/router';
 
export const authGuard: CanActivateFn = () => {
  const authService = inject(UserRegisteringService);
  const router = inject(Router);
 
  const token = authService.getToken();
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
 
  return true;
};
 
export const roleGuard = (expectedRole: string): CanActivateFn => {
  return () => {
    const authService = inject(UserRegisteringService);
    const router = inject(Router);
 
    const role = authService.getCurrentUserRole();
    if (role !== expectedRole) {
      router.navigate(['/login']);
      return false;
    }
 
    return true;
  };
};
 