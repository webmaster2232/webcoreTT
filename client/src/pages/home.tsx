import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Welcome
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          A Netlify-ready contact form application. Use the contact page to get in touch.
        </p>
      </div>
      
      <div className="flex gap-4">
        <Link href="/contact">
          <Button size="lg" className="text-lg">Get in Touch</Button>
        </Link>
      </div>
    </div>
  );
}
