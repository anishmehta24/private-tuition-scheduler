import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div >
          <h3 className="text-xl font-bold mb-4 text-purple-400">About Me</h3>
          <p className="text-gray-300 leading-relaxed">
            Passionate educator specializing in Physics, dedicated to helping 
            students build strong foundations and achieve excellence in academics 
            and competitive exams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-purple-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-purple-400">Contact</h3>
          <p className="text-gray-300">
            Feel free to reach out via email or connect on social media.
          </p>
          <p className="mt-2 text-gray-300">
            <strong>Email:</strong> yourname@example.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Designed with ❤️ by <span className="text-purple-400">Your Name</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
