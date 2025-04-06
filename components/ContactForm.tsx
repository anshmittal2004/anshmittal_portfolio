'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export function ContactForm() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xvgkwekv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded', // Explicitly set content type
        },
        body: new URLSearchParams(data as any).toString(), // Ensure URL-encoded format
      });

      if (response.ok) {
        window.location.href = '/?success=true'; // Redirect to current page with success param
      } else {
        const errorText = await response.text();
        throw new Error(`Submission failed: ${errorText || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-2xl mx-auto px-4 sm:px-0"
    >
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your name"
          disabled={isSubmitting}
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="_replyto"
          type="email"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your email"
          disabled={isSubmitting}
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message"
          disabled={isSubmitting}
        />
      </div>

      {/* Success or Error Message */}
      {isSuccess && (
        <div className="p-4 text-green-700 bg-green-100 rounded text-center">
          Message sent successfully!
        </div>
      )}
      {error && (
        <div className="p-4 text-red-700 bg-red-100 rounded text-center">
          Error: {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-4 text-lg bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}