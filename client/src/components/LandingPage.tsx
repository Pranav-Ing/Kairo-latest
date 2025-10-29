import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import kairoLogo from '@assets/Logo_Kairo_Final-removebg-preview_1761680007331.png';
import { Brain, Heart, Shield, Users } from 'lucide-react';

export default function LandingPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#2d5a8f] via-[#4a7cb8] to-[#5d8fc9] min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <img 
              src={kairoLogo} 
              alt="Kairo" 
              className="w-40 h-40 mx-auto mb-8 drop-shadow-2xl"
              data-testid="img-kairo-logo"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            data-testid="text-hero-title"
          >
            Find Calm, Anytime, Anywhere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light"
            data-testid="text-hero-subtitle"
          >
            Your personal companion for emotional wellness and mental health support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={() => setLocation('/select-plan')}
              className="bg-[#5d8fc9] hover:bg-[#4a7cb8] text-white text-lg px-12 py-6 rounded-full shadow-2xl font-semibold border-2 border-white/20"
              data-testid="button-begin-journey"
            >
              Begin Your Journey
            </Button>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-background" id="about">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-title">About Kairo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
              We're committed to making mental health support accessible, compassionate, and effective for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
              data-testid="section-mission"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, compassionate mental health support to everyone, everywhere. We believe mental wellness is a fundamental right, and we're dedicated to breaking down barriers to care through technology and human connection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
              data-testid="section-vision"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A world where mental health support is as natural and accessible as physical healthcare. We envision communities where seeking help is embraced, stigma is eliminated, and everyone has the tools to thrive emotionally.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-12 mb-12"
            data-testid="section-understanding"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Understanding Mental Health</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act. Just like physical health, mental health exists on a spectrum and can change throughout our lives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Good mental health isn't just the absence of mental illness—it's about feeling capable, resilient, and able to cope with life's challenges. It's okay to not be okay, and seeking support is a sign of strength, not weakness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 rounded-2xl p-8 md:p-12"
            data-testid="section-signs"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Signs You May Need Help</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Persistent feelings of sadness, anxiety, or emptiness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Difficulty concentrating or making decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Changes in sleep patterns or appetite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Loss of interest in activities you once enjoyed</span>
                </li>
              </ul>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Withdrawal from friends and family</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Extreme mood swings or irritability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Difficulty coping with daily stress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Thoughts of self-harm or suicide</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                If you're experiencing any of these signs, you're not alone. Help is available.
              </p>
              <Button
                onClick={() => setLocation('/select-plan')}
                size="lg"
                data-testid="button-get-help"
              >
                Get Help Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
