import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/abstract_modern_geometric_shapes_with_soft_gradients.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 space-y-8 max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Welcome to Our Platform
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            A starter template with a working contact form ready for Netlify deployment. 
            Connect with us to start your journey.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8 text-lg">Get in Touch</Button>
          </Link>
          <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
