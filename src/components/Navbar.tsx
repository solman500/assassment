
import Navlinks from "@/constent/Constant";
import { appLogo } from "@/helpers/assets/icons.import";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="w-full h-16 flex items-center px-4 md:px-6 bg-[#FFFFFF]  justify-between">
      {/* Logo Section */}
      <img src={appLogo} alt="Logo" className="h-10 w-10 md:h-15 md:w-15" />
      
      <div className="hidden md:flex items-center space-x-6 lg:space-x-10 font-bold text-primary">
        {Navlinks.map((link) => (
          <a
            href={link.url}
            key={link.translationKey}
            className="relative inline-block transition-all duration-300
              after:absolute after:content-[''] after:w-full after:scale-0 
              after:h-[2px] after:left-0 after:-bottom-1 
              after:bg-blue-400 after:transition-all after:duration-300
              hover:after:scale-100 text-sm lg:text-base"
          >
            {link.translationKey}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2"
        onClick={onMenuClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Avatar/Profile */}
      <div className="hidden md:flex items-center gap-4"></div>
    </nav>
  );
}
