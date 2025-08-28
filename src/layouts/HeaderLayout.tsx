import { Link } from 'react-router-dom';
import path from '@/utils/path';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { useNotificationStore } from '@/store/notificationStore';
import ThemeToggle from '@/components/ThemeToggle';

export default function Header() {
  const pathEntries = Object.entries(path);
  const navigationPaths = pathEntries.slice(0, -1);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const addNotification = useNotificationStore((state) => state.addNotification);
  const handlerLogout = () => {
    addNotification("You have been logged out.");
    logout();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <NavigationMenu className="list-none flex gap-4 p-4">
        {navigationPaths.map(([key, value]) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              {value.path === path.login.path && isAuthenticated ? (
                <Button
                  onClick={handlerLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg shadow"
                >
                  Logout
                </Button>
              ) : (
                <Link to={value.path}>{value.titel}</Link>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <ThemeToggle />
      </NavigationMenu>
    </header>
  );
}
