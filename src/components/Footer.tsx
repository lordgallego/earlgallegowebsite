import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        






        <p>© {new Date().getFullYear()} Earl Adrian Gallego. All rights reserved.</p>
      </div>
    </footer>);

};

export default Footer;