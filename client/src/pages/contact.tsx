import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    // Netlify Forms will handle this automatically with data-netlify="true"
    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("firstName", data.firstName || "");
    formData.append("lastName", data.lastName || "");
    formData.append("email", data.email || "");
    formData.append("message", data.message || "");

    fetch("/", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We will get back to you shortly.",
        });
        reset();
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg mb-10">
              Tell us about your project and what you're looking to build. We'll get back to you with next steps.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">contact@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <span className="text-muted-foreground">Online Available</span>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="font-bold mb-2">Ready to start?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                We typically respond to inquiries within 24 hours.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card border border-border p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-netlify="true" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input {...register("firstName")} placeholder="John" name="firstName" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input {...register("lastName")} placeholder="Doe" name="lastName" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Email</Label>
                <Input {...register("email", { required: true })} type="email" placeholder="john@company.com" name="email" />
              </div>

              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea {...register("message", { required: true })} className="min-h-[150px]" placeholder="Tell us about your project..." name="message" />
              </div>

              <Button type="submit" size="lg" className="w-full font-bold">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
