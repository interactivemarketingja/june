import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Heart, Telescope } from 'lucide-react';

export function Mission() {
  return (
    <section className="py-12 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline md:text-4xl">Our Story, Mission, and Goals</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the journey and the purpose behind our efforts to support June.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Telescope className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center font-headline">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This campaign was born from the love and deep admiration we have for our dear friend, June. Witnessing her unwavering strength in the face of sudden adversity moved us to action. We believe that no one should face such a monumental challenge alone. 'Hope's Horizon' is our collective promise to her that a community of support stands with her, ready to lift her up as she navigates the path to recovery.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center font-headline">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mission is to alleviate the financial burden of medical treatments and living expenses for June and her family. By providing this crucial support, we aim to create a stable and stress-free environment, allowing her to dedicate all her energy toward healing and rehabilitation. We are committed to ensuring she receives the best possible care without the looming worry of financial hardship.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center font-headline">Our Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We have set a fundraising goal that will cover the costs of specialized therapies, necessary medical equipment, and modifications to her home to ensure her comfort and safety. Additionally, we aim to build a network of ongoing encouragement and practical help. Every donation, every share, and every message of support brings us closer to giving June the future she so richly deserves.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
