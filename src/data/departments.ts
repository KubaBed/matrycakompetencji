import { Department } from '@/types/competency';

import salesIcon from '@/assets/departments/sales.png';
import pmIcon from '@/assets/departments/pm.png';
import mobileIcon from '@/assets/departments/mobile.png';
import webIcon from '@/assets/departments/web.png';
import qaIcon from '@/assets/departments/qa.png';

export const departments: Department[] = [
  {
    id: 'sales',
    name: 'Sales',
    description: 'Zespół sprzedaży odpowiedzialny za pozyskiwanie klientów i budowanie relacji biznesowych',
    icon: salesIcon,
    positions: [
      { id: 'sales-rep', name: 'Sales Representative', departmentId: 'sales', levels: ['junior', 'mid', 'senior'] },
      { id: 'account-manager', name: 'Account Manager', departmentId: 'sales', levels: ['mid', 'senior', 'lead'] },
      { id: 'sales-director', name: 'Sales Director', departmentId: 'sales', levels: ['senior', 'lead', 'expert'] },
    ],
  },
  {
    id: 'pm',
    name: 'Project Management',
    description: 'Zespół zarządzania projektami dbający o terminowe dostarczanie wartości dla klientów',
    icon: pmIcon,
    positions: [
      { id: 'project-manager', name: 'Project Manager', departmentId: 'pm', levels: ['junior', 'mid', 'senior', 'lead'] },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Zespół tworzący innowacyjne aplikacje mobilne na iOS, Android i platformy cross-platform',
    icon: mobileIcon,
    positions: [
      { id: 'flutter-developer', name: 'Flutter Developer', departmentId: 'mobile', levels: ['junior', 'mid', 'senior'] },
    ],
  },
  {
    id: 'web',
    name: 'Web Development',
    description: 'Zespół budujący nowoczesne aplikacje webowe i systemy backendowe',
    icon: webIcon,
    positions: [
      { id: 'frontend-developer', name: 'Front-End Developer', departmentId: 'web', levels: ['junior', 'mid', 'senior'] },
      { id: 'backend-developer', name: 'Backend Developer', departmentId: 'web', levels: ['junior', 'mid', 'senior'] },
      { id: 'fullstack-developer', name: 'Fullstack Developer', departmentId: 'web', levels: ['junior', 'mid', 'senior'] },
      { id: 'python-developer', name: 'Python Developer', departmentId: 'web', levels: ['junior', 'mid', 'senior', 'lead'] },
    ],
  },
  {
    id: 'qa',
    name: 'Quality Assurance',
    description: 'Zespół dbający o najwyższą jakość produktów poprzez testy i automatyzację',
    icon: qaIcon,
    positions: [
      { id: 'qa-specialist', name: 'Quality Assurance Specialist', departmentId: 'qa', levels: ['junior', 'mid', 'senior'] },
    ],
  },
];

export const getDepartmentById = (id: string): Department | undefined => {
  return departments.find(d => d.id === id);
};
