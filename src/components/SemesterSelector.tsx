import React from 'react';

interface SemesterSelectorProps {
  selectedSemester: string;
  selectedDivision: string;
  onSemesterChange: (semester: string) => void;
  onDivisionChange: (division: string) => void;
}

export default function SemesterSelector({
  selectedSemester,
  selectedDivision,
  onSemesterChange,
  onDivisionChange,
}: SemesterSelectorProps) {
  const semesters = ['3rd', '5th', '7th'];
  const divisions = ['A', 'B', 'C'];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center my-6">
      <div className="flex items-center space-x-4">
        <label className="font-medium text-gray-700">Semester:</label>
        <select
          value={selectedSemester}
          onChange={(e) => onSemesterChange(e.target.value)}
          className="form-select rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              {sem} Semester
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-4">
        <label className="font-medium text-gray-700">Division:</label>
        <select
          value={selectedDivision}
          onChange={(e) => onDivisionChange(e.target.value)}
          className="form-select rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          {divisions.map((div) => (
            <option key={div} value={div}>
              Division {div}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}