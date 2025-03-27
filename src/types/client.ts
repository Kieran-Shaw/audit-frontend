export type Client = {
  id: string;
  name: string;
  email: string;
  company: string;
  status: 'active' | 'inactive';
  lastAudit: string;
  industry: string;
  createdAt: string;
} 