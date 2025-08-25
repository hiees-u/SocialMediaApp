import { create } from 'zustand';

interface NotificationState {
  notifications: { id: number; message: string }[];
  addNotification: (msg: string) => void;
  removeNotification: (id: number) => void;
  clearNotifications: () => void;
}

let nextId = 0;

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  
  addNotification: (msg) => {
    const id = nextId++;
    set((state) => ({
      notifications: [...state.notifications, { id, message: msg }]
    }));

    // Tự động remove sau 5 giây
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter(n => n.id !== id)
      }));
    }, 5000);
  },
  
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
  
  clearNotifications: () => set({ notifications: [] }),
}));
