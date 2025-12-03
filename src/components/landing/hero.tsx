import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SocialShare } from './social-share';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div id="donate" className="relative z-10 max-w-4xl p-8">
        <h1 className="text-4xl font-bold tracking-tight font-headline md:text-6xl lg:text-7xl leading-tight">
          A Beacon of Hope for Our Dearest Friend
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Join us in supporting Hope's journey to recovery. Your contribution, big or small, brings us one step closer to her healing and brighter days ahead.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="transition-transform transform hover:scale-105">
            <a href="https://www.gofundme.com/" target="_blank" rel="noopener noreferrer">Make a Donation</a>
          </Button>
        </div>
        <div className="mt-8 flex justify-center">
          <SocialShare />
        </div>
      </div>
    </section>
  );
}
