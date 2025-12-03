import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Bio() {
  const bioImage = PlaceHolderImages.find((img) => img.id === 'bio');

  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
              {bioImage && (
                <Image
                  src={bioImage.imageUrl}
                  alt={bioImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={bioImage.imageHint}
                />
              )}
            </div>
            <p className="mt-4 text-center italic text-muted-foreground">
              "By God's word and your support I Will Walk Again."
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline md:text-4xl">About June Wright</h2>
            <p className="text-lg text-muted-foreground">
              June Wright is a radiant soul, known for her infectious laughter and boundless kindness. An artist, a dreamer, and a cherished friend to many, she has always been the one to bring light into every room she enters. Her passion for life is evident in everything she does, from her beautiful paintings to her love for hiking in the mountains.
            </p>
            <p className="text-lg text-muted-foreground">
              An unexpected illness has placed her on a challenging path. Despite the hardships, June's spirit remains unbroken. She faces each day with courage and a determination that inspires us all. This journey is difficult, but with our collective support, we can help her focus on what truly matters: her recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
