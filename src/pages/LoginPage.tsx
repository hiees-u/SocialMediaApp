import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNotificationStore } from '@/store/notificationStore';
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { notifications, addNotification } = useNotificationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify({ email: username, password }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        addNotification(`Error: ${errorData.error}`);
        return;
      }
      const data = await res.json();
      addNotification('Login successful!');
    } catch (err) {
      addNotification('Network error: ' + (err as Error).message);
    }
  };

  return (
    <div className="container">
      <p className="text-2xl font-bold">LOGIN</p>
      <div className="m-2 flex flex-row items-center">
        <Label className="flex-1 text-left">Email: </Label>
        <Input
          className="flex-[2]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="m-2 flex flex-row items-center">
        <Label className="flex-1 text-left">Password: </Label>
        <Input
          className="flex-[2]"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <Button type='submit' onClick={handleSubmit}>Login</Button>
      </div>
      <p>{notifications.map(n => <span key={n.id}>{n.message}</span>)}</p>
    </div>
  );
};

export default LoginPage;
