import Link from 'next/link';
import { HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex md:ml-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <HandHeart className="h-6 w-6" style={{ color: 'hsl(var(--accent-foreground))' }} />
            <span className="font-bold font-headline sm:inline-block">
              Hope's Horizon
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="mr-4">
            <a href="#donate">Donate Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
