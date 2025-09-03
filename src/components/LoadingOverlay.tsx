// components/common/LoadingOverlay.tsx
import { Loader2 } from "lucide-react";
import { useLoadingStore, type LoadingState } from "@/store/loadingStore";

export default function LoadingOverlay() {
  const isLoading = useLoadingStore((state: LoadingState) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
