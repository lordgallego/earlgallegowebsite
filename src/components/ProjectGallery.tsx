import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  images: string[];
}

const ProjectGallery = ({
  open,
  onOpenChange,
  title,
  description,
  images,
}: ProjectGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (open) setSelectedIndex(0);
  }, [open]);

  const goTo = useCallback(
    (dir: 1 | -1) => {
      setSelectedIndex((i) => (i + dir + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(-1);
      if (e.key === "ArrowRight") goTo(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, goTo]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden">
        <div className="p-6 pb-3">
          <DialogHeader>
            <DialogTitle
              className="text-xl font-semibold tracking-wide uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {description}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Main image viewer */}
        <div className="relative bg-black/5 dark:bg-white/5">
          <div className="relative aspect-[16/10] flex items-center justify-center">
            <img
              src={images[selectedIndex]}
              alt={`${title} — ${selectedIndex + 1} of ${images.length}`}
              className="max-w-full max-h-full object-contain pointer-events-none select-none"
              draggable={false}
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={() => goTo(-1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => goTo(1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Image counter */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="px-6 pb-5 pt-3">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setSelectedIndex(i)}
                  className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                    i === selectedIndex
                      ? "border-foreground opacity-100"
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;
