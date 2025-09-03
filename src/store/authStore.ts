import { create } from 'zustand';
import { useLoadingStore } from './loadingStore';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  loading: boolean;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  loading: true,

  login: async (email: string, password: string) => {
    const { show, hide } = useLoadingStore.getState();
    try {
      show();
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        set({ loading: false });
        return { success: false, message: errorData.error, loading: false };
      }

      const data = await res.json();
      set({ token: data.token, isAuthenticated: true, loading: false });
      localStorage.setItem('authToken', data.token);
      hide();
      return { success: true, message: 'Login successful!, loading: false' };
    } catch (err) {
      set({ loading: false });
      hide();
      return {
        success: false,
        message: 'Network error: ' + (err as Error).message,
      };
    }
  },

  checkAuth: () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      set({ token, isAuthenticated: true, loading: false });
    } else {
      set({ token: null, isAuthenticated: false, loading: false }); // 👈 thêm dòng này
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    set({ token: null, isAuthenticated: false, loading: false });
  },
}));
