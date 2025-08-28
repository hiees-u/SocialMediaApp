// src/components/NotificationContainer.jsx
import { useToast } from '@/hooks/use-toast';
import { useNotificationStore } from '@/store/notificationStore';
import { useEffect } from 'react';

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotificationStore();
  const { toast } = useToast();

  useEffect(() => {
    if (notifications.length > 0) {
      const latest = notifications[notifications.length - 1];
      toast({
        title: 'Notification',
        description: latest.message,
      });
      removeNotification(latest.id);
    }
  }, [notifications, toast, removeNotification]);
  
  return (<></>);
}
