import { create } from 'zustand';
import { useAuthStore } from './authStore';

export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  likes: Likes;
  imageUrl?: string | null;
}

export interface Likes {
  likes: number;
  likeTokens: string[];
}

interface PostState {
  posts: Post[];
  addPost: (title: string, content: string, category: string, imageFile?: File | null) => void;
  removePost: (id: number) => void;
  clearPosts: () => void;
  toggleLike: (id: number) => void;
}

let nextId = 1;

export const usePostStore = create<PostState>((set) => ({
  posts: [],  

  addPost: (title, content, category, imageFile = null) =>
  set((state) => {
    let imageUrl: string | null = null;

    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
    }

    return {
      posts: [
        ...state.posts,
        {
          id: nextId++,
          title,
          content,
          category,
          imageUrl,
          likes: { likes: 0, likeTokens: [] },
        },
      ],
    };
  }),

  removePost: (id: number) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id),
    })),

  toggleLike: (id) =>
    set((state) => ({
      posts: state.posts.map((p) => {
        const tokenUser = useAuthStore.getState().token;

        if (p.id !== id) return p;
        const hasLiked = p.likes.likeTokens.includes(tokenUser || '');
        return {
          ...p,
          likes: {
            likes: hasLiked ? p.likes.likes - 1 : p.likes.likes + 1,
            likeTokens: hasLiked
              ? p.likes.likeTokens.filter((t) => t !== tokenUser)
              : [...p.likes.likeTokens, tokenUser || ''],
          },
        };
      }),
    })),

  clearPosts: () => set({ posts: [] }),
}));
