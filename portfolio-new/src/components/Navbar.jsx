const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          SV
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
