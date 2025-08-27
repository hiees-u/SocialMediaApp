import { create } from "zustand";

export interface Post {
  id: number;
  title: string;
  content: string;
  likes: number;
}

interface PostState {
  posts: Post[];
  addPost: (title: string, content: string) => void;
  removePost: (id: number) => void;
  clearPosts: () => void;
}

let nextId = 1;

export const usePostStore = create<PostState>((set) => ({
  posts: [],

  addPost: (title, content) =>
    set((state) => ({
      posts: [
        ...state.posts,
        { id: nextId++, title, content, likes: 0 },
      ],
    })),

  removePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id),
    })),

  clearPosts: () => set({ posts: [] }),
}));
