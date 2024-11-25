

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid for desktop and stacked layout for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading company in providing the best solutions for your business needs. Our team is dedicated to delivering high-quality service.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#web-design" className="text-gray-400 hover:text-white">
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#development" className="text-gray-400 hover:text-white">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#marketing" className="text-gray-400 hover:text-white">
                  Digital Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#branding" className="text-gray-400 hover:text-white">
                  Branding
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">
              1234 Street Name, City, State 56789
            </p>
            <p className="text-gray-400 mb-2">
              Email: <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+1234567890" className="hover:text-white">+123-456-7890</a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
