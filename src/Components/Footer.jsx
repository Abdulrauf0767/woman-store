import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-black w-[90%] mx-auto mt-20 font-title">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">ShopMate</h2>
          <p className="text-sm text-black">
            Your one-stop online store for all the latest trends and best deals.
          </p>
          <div className="flex gap-4 mt-4">
            <button type="button"><FontAwesomeIcon icon={faFacebook} className="hover:text-sky-400"/></button>
            <button type="button"><FontAwesomeIcon icon={faTwitter} className="hover:text-sky-400"/></button>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} className="hover:text-red-500" /></a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-black">
            <li><a href="#">Men's Fashion</a></li>
            <li><a href="#">Women's Fashion</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Accessories</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm text-black">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-black">
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>
      </div>
        <hr className="w-[90%] mx-auto mt-10" />
      {/* Footer Bottom */}
      <div className="text-center text-sm  text-gray-500 mb-10  border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
