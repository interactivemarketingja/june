"use client";

import { useState, useEffect } from 'react';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function SocialShare() {
  const { toast } = useToast();
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    // This will run only on the client, after hydration
    setPageUrl(window.location.href);
  }, []);

  const copyToClipboard = () => {
    if (pageUrl) {
      navigator.clipboard.writeText(pageUrl);
      toast({
        title: 'Link Copied!',
        description: 'The page URL has been copied to your clipboard.',
      });
    }
  };

  const shareText = "Support Hope's journey to recovery. Every little bit helps. #HopesHorizon";

  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
        <p className="text-sm font-medium mr-2 text-white">Share the cause:</p>
        <Button variant="outline" size="icon" className="bg-transparent text-white border-white/50 hover:bg-white/20 hover:text-white" asChild>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4" />
            </a>
        </Button>
        <Button variant="outline" size="icon" className="bg-transparent text-white border-white/50 hover:bg-white/20 hover:text-white" asChild>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                <Facebook className="h-4 w-4" />
            </a>
        </Button>
        <Button variant="outline" size="icon" className="bg-transparent text-white border-white/50 hover:bg-white/20 hover:text-white" onClick={copyToClipboard} aria-label="Copy link">
            <LinkIcon className="h-4 w-4" />
        </Button>
    </div>
  );
}
