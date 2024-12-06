import React from 'react';
import { GraduationCap, LogOut } from 'lucide-react';
import type { UserRole } from '../App';

interface NavbarProps {
  onLogout: () => void;
  userRole: UserRole;
}

export default function Navbar({ onLogout, userRole }: NavbarProps) {
  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500';
      case 'hod':
        return 'bg-yellow-500';
      case 'professor':
        return 'bg-green-500';
      case 'student':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return 'Administrator';
      case 'hod':
        return 'Head of Department';
      case 'professor':
        return 'Professor';
      case 'student':
        return 'Student';
      default:
        return role;
    }
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">BLDEA Engineering College</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className={`px-4 py-1 rounded-full ${getRoleColor(userRole)} text-white font-medium`}>
              {getRoleLabel(userRole)}
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}