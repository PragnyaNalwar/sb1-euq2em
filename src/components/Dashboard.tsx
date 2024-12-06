import React from 'react';
import type { UserRole } from '../App';
import Navbar from './Navbar';
import Timetable from './Timetable';
import SemesterSelector from './SemesterSelector';

interface DashboardProps {
  userRole: UserRole;
  onLogout: () => void;
}

export default function Dashboard({ userRole, onLogout }: DashboardProps) {
  const [selectedSemester, setSelectedSemester] = React.useState('5th');
  const [selectedDivision, setSelectedDivision] = React.useState('A');

  const canEditTimetable = userRole === 'professor' || userRole === 'hod' || userRole === 'admin';

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onLogout={onLogout} userRole={userRole} />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            B.L.D.E.A's V. P. Dr. P. G. Halakatti College of Engineering and Technology
          </h1>
          <p className="mt-2 text-xl text-gray-600">Department of Computer Science & Engineering</p>
          <p className="mt-1 text-lg text-gray-500">Academic Year 2024-25 (Odd Semester)</p>
        </div>

        <SemesterSelector
          selectedSemester={selectedSemester}
          selectedDivision={selectedDivision}
          onSemesterChange={setSelectedSemester}
          onDivisionChange={setSelectedDivision}
        />

        <Timetable
          semester={selectedSemester}
          division={selectedDivision}
          canEdit={canEditTimetable}
        />
      </main>
    </div>
  );
}