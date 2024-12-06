import React from 'react';

interface Subject {
  code: string;
  name: string;
  faculty: string;
}

interface TimetableProps {
  semester: string;
  division: string;
  canEdit: boolean;
}

export default function Timetable({ semester, division, canEdit }: TimetableProps) {
  const subjects: Subject[] = [
    { code: 'BCS501', name: 'Software Engineering & Project Management (SEPM)', faculty: 'Mrs. Varsharani S Patil' },
    { code: 'BCS502', name: 'Computer Networks (CN)', faculty: 'Dr. Aanand B Jumnal' },
    { code: 'BCS503', name: 'Theory of Computation (TOC)', faculty: 'Dr. Anil Kannur' },
    { code: 'BCSL504', name: 'Web Technology Lab (WTL)', faculty: 'A1: Mr. Santosh Chinchali, Mr. R D Salagar' },
    { code: 'BCS515B', name: 'Artificial Intelligence (AI)', faculty: 'Mr. Prabu Bevinamarad' },
    { code: 'BCSS586', name: 'Mini Project (MP)', faculty: 'A1: Dr. M S Shirondkar, Dr. Anil Kannur' },
  ];

  const timeSlots = [
    '9:00-10:00', '10:00-11:00', '11:00-11:15', '11:15-12:15',
    '12:15-1:15', '1:15-2:15', '2:15-3:15', '3:15-4:00',
    '4:00-4:15', '4:15-5:30'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Timetable - {semester} Semester (Division {division})
            </h2>
            {canEdit && (
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Edit Timetable
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Day/Time
                  </th>
                  {timeSlots.map((slot, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {slot}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {days.map((day, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {day}
                    </td>
                    {timeSlots.map((_, slotIndex) => (
                      <td
                        key={slotIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {day === 'Monday' && slotIndex === 0 && 'SEPM'}
                        {/* Add more schedule data here */}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Subject Details</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Faculty
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {subjects.map((subject, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {subject.code}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subject.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subject.faculty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}