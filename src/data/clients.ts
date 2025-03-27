import { Client } from '../types/client';

export const clients: Client[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@techcorp.com',
    company: 'TechCorp Solutions',
    status: 'active',
    lastAudit: '2024-02-15',
    industry: 'Technology',
    createdAt: '2023-08-01',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@greeneco.com',
    company: 'GreenEco Industries',
    status: 'active',
    lastAudit: '2024-03-01',
    industry: 'Environmental',
    createdAt: '2023-09-15',
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'm.chen@innovatefin.com',
    company: 'Innovate Financial',
    status: 'inactive',
    lastAudit: '2023-12-10',
    industry: 'Finance',
    createdAt: '2023-06-20',
  },
  {
    id: '4',
    name: 'Emma Davis',
    email: 'e.davis@healthplus.com',
    company: 'HealthPlus Medical',
    status: 'active',
    lastAudit: '2024-01-20',
    industry: 'Healthcare',
    createdAt: '2023-11-05',
  },
]; 