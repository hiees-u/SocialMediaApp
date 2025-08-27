import { create } from 'zustand';

interface Notification {
  id: number;
  message: string;
}

interface NotificationState {
  notifications: Notification[];
  addNotification: (msg: string) => void;
  removeNotification: (id: number) => void;
  clearNotifications: () => void;
}

let nextId = 0;

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],

  addNotification: (msg) => {
    set((state) => {
      if (state.notifications.some((n) => n.message === msg)) {
        return state;
      }

      const id = nextId++;
      return {
        notifications: [...state.notifications, { id, message: msg }],
      };
    });

    const id = nextId - 1;
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    }, 5000);
  },

  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),

  clearNotifications: () => set({ notifications: [] }),
}));
