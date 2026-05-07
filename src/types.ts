export type TaskStatus = 'Pending' | 'Completed';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt?: string;
  userId: string;
};

export type DirectoryUser = {
  id: number;
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  company?: {
    name?: string;
    title?: string;
  };
  address?: {
    city?: string;
    state?: string;
    country?: string;
  };
};
