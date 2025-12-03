import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Bio } from '@/components/landing/bio';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Bio />
      </main>
      <Footer />
    </div>
  );
}
