
import type React from 'react';

export type Theme = 'light' | 'dark';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}
