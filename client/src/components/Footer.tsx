import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLocation } from 'wouter';
import kairoLogo from '@assets/Screenshot_2025-10-28_at_12.16.32_PM-removebg-preview_1761634054263.png';

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-card border-t mt-auto" data-testid="footer">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={kairoLogo} alt="Kairo" className="w-10 h-10" />
              <span className="font-bold text-xl">Kairo</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your personal companion for emotional wellness and mental health support.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate p-2 rounded-full bg-muted" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-full bg-muted" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-full bg-muted" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover-elevate p-2 rounded-full bg-muted" data-testid="link-linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setLocation('/#about')} className="text-muted-foreground hover:text-primary" data-testid="link-about">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => setLocation('/auth')} className="text-muted-foreground hover:text-primary" data-testid="link-get-started">
                  Get Started
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-help-center">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-contact">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary" data-testid="link-feedback">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <div className="text-muted-foreground">Email</div>
                  <a href="mailto:support@kairo.com" className="hover:text-primary" data-testid="link-email">
                    support@kairo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <div className="text-muted-foreground">Phone</div>
                  <a href="tel:1800-599-0019" className="hover:text-primary" data-testid="link-phone">
                    1800-599-0019
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <div className="text-muted-foreground">Address</div>
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">&copy; 2025 Kairo. All rights reserved. Your mental health matters.</p>
        </div>
      </div>
    </footer>
  );
}
