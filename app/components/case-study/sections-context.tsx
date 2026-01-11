'use client'

import { createContext } from 'react'

// Create a context to share section data
export const SectionsContext = createContext<{
  sections: { id: string; title: string }[];
  registerSection: (id: string, title: string) => void;
}>({
  sections: [],
  registerSection: () => {},
});
