import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00b67f] text-black py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
            <Link to="/about" className="hover:opacity-80 transition-opacity">
              About
            </Link>
            <Link to="/contact" className="hover:opacity-80 transition-opacity">
              Contact
            </Link>
            <Link to="/privacy-policy" className="hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:opacity-80 transition-opacity">
              Terms of Service
            </Link>
            <Link to="/shipping" className="hover:opacity-80 transition-opacity">
              Shipping Policy
            </Link>
            <Link to="/cancellation" className="hover:opacity-80 transition-opacity">
              Cancellation Policy
            </Link>
          </div>
          <div className="text-sm">
            © {currentYear} SEWNA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
