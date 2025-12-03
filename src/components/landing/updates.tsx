import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar } from 'lucide-react';

const updates = [
  {
    id: 'update1',
    title: 'A Small Step Forward',
    date: 'July 20, 2024',
    content: "Hope took her first steps today with the new physical therapist. It was a challenging but incredibly moving moment for all of us. Thank you for making this possible.",
  },
  {
    id: 'update2',
    title: 'A Message from Hope',
    date: 'July 15, 2024',
    content: "Hope wanted to share a message: 'I am overwhelmed by the love and support. Every message gives me strength. Thank you from the bottom of my heart.'",
  },
  {
    id: 'update3',
    title: 'Community Support',
    date: 'July 10, 2024',
    content: "The local community bake sale was a huge success! We're so grateful for everyone who came out to show their support for Hope.",
  },
];

export function Updates() {
  return (
    <section className="py-12 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Hope's Progress</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Stay updated on Hope's journey and see how your generosity is making a difference.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update) => {
            const updateImage = PlaceHolderImages.find((img) => img.id === update.id);
            return (
              <Card key={update.id} className="group flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                {updateImage && (
                  <div className="relative overflow-hidden">
                    <Image
                      src={updateImage.imageUrl}
                      alt={updateImage.description}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={updateImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{update.date}</span>
                  </div>
                  <CardTitle className="font-headline">{update.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{update.content}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
