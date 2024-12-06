import React, { useState } from 'react';
import { Shield, GraduationCap, User, Lock } from 'lucide-react';
import type { UserRole } from '../App';

interface LoginPageProps {
  onLogin: (email: string, password: string, role: UserRole) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password, role);
  };

  const roles = [
    { value: 'student', label: 'Student', color: 'bg-blue-500' },
    { value: 'professor', label: 'Professor', color: 'bg-green-500' },
    { value: 'hod', label: 'Head of Department', color: 'bg-yellow-500' },
    { value: 'admin', label: 'Administrator', color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - College Info */}
      <div className="w-1/2 p-8 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="text-white max-w-lg">
          <div className="flex items-center space-x-3 mb-8">
            <GraduationCap className="h-16 w-16" />
            <div>
              <h2 className="text-4xl font-bold leading-tight">BLDEA Engineering College</h2>
              <h3 className="text-xl font-semibold text-white/90 mt-2">Vijayapura (Karnataka)</h3>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Timetable Management System</h1>
          <p className="text-lg text-white/80">
            Streamline your academic schedule with our comprehensive timetable management solution.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-lg bg-white/10 shadow-xl border border-white/20 animate-fadeIn">
          <div className="flex justify-center mb-8">
            <Shield className="h-12 w-12 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            {isRegistering ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-center text-white/80 mb-8">
            {isRegistering ? 'Register for a new account' : 'Sign in to your account'}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Select Role</label>
              <div className="grid grid-cols-2 gap-2">
                {roles.map(({ value, label, color }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRole(value as UserRole)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      role === value
                        ? `${color} border-white text-white`
                        : 'border-white/20 text-white/60 hover:border-white/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Email</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-white/60" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-white/60" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-white text-indigo-600 rounded-lg font-medium hover:bg-opacity-90 transform transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              {isRegistering ? 'Create Account' : 'Sign In'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                {isRegistering ? 'Already have an account? Sign in' : "Don't have an account? Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}