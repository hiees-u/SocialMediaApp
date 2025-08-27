import { create } from "zustand";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { success: false, message: errorData.error };
      }

      const data = await res.json();
      set({ token: data.token, isAuthenticated: true });
      return { success: true, message: "Login successful!" };
    } catch (err) {
      return { success: false, message: "Network error: " + (err as Error).message };
    }
  },

  logout: () => {
    set({ token: null, isAuthenticated: false });
  },
}));
