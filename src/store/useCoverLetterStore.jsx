import { create } from 'zustand';

const useCoverLetterStore = create((set) => ({
  letter: '',
  title: 'Cover Letter',
  loading: false,
  error: null,

  setLetter: (letter) => set({ letter }),
  setTitle: (title) => set({ title }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useCoverLetterStore;
