// src/components/NotificationContainer.jsx
import {useNotificationStore} from '@/store/notificationStore';

export default function NotificationContainer() {
  const { notifications, removeNotification } = useNotificationStore();

  return (
    // Container cha với vị trí cố định ở trên cùng
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
      {notifications.map((notification) => (
        // Component con cho từng thông báo
        <div 
          key={notification.id} 
          className="relative bg-white text-gray-800 p-4 rounded-lg shadow-lg max-w-sm flex items-center justify-between animate-fadeIn"
        >
          <span>{notification.message}</span>
          <button 
            onClick={() => removeNotification(notification.id)}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
}