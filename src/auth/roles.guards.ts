// auth/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decotator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Jika tidak ada role yang dibutuhkan, izinkan akses
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('User dari request:', user); // Debug
    console.log('Role yang dibutuhkan:', requiredRoles); // Debug

    if (!user) {
      console.error('User tidak ditemukan di request');
      throw new ForbiddenException('User tidak ditemukan');
    }

    if (!user.role) {
      console.error('User tidak memiliki role');
      throw new ForbiddenException('User tidak memiliki role');
    }

    const hasRole = requiredRoles.some((role) => user.role === role);
    
    console.log('User role:', user.role); // Debug
    console.log('Has role?', hasRole); // Debug

    if (!hasRole) {
      throw new ForbiddenException(
        `Anda tidak memiliki akses. Role Anda: ${user.role}, Role yang dibutuhkan: ${requiredRoles.join(', ')}`
      );
    }

    return true;
  }
}