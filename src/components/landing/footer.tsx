import { HandHeart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-primary border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
            <HandHeart className="h-5 w-5 text-black" />
            <p className="text-center text-lg leading-loose text-black md:text-left font-headline">
              June Wright
            </p>
        </div>
        <div className="text-center md:text-left">
          <p className="text-lg text-black">
            © {new Date().getFullYear()} June Wright. All Rights Reserved.
          </p>
          <p className="text-sm text-black">
            Developed by Island Web Consultant
          </p>
        </div>
      </div>
    </footer>
  );
}
