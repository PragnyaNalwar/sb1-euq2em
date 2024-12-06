import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';

export type UserRole = 'student' | 'professor' | 'hod' | 'admin' | null;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleLogin = (email: string, password: string, role: UserRole) => {
    // In a real app, you would validate credentials against a backend
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <div className="min-h-screen">
      {isAuthenticated ? (
        <Dashboard userRole={userRole} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;