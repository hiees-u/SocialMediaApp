import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useNotificationStore } from '@/store/notificationStore';

interface CreatePostFormProps {
  onClose: () => void;
}

export default function CreatePostForm({ onClose }: CreatePostFormProps) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const addNotification = useNotificationStore((state) => state.addNotification);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Tạo bài đăng:', { title, content });
    addNotification('Đã tạo bài đăng thành công!');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Tạo Bài Đăng Mới</h2>
      <Input
        type="text"
        placeholder="Tiêu đề bài đăng"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Nội dung bài đăng"
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        required
      />
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onClose} type="button">
          Hủy
        </Button>
        <Button type="submit">Đăng bài</Button>
      </div>
    </form>
  );
}
