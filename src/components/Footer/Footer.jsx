function Footer() {
  return (
    <footer className="bg-purple-400 text-white p-6 mt-8 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Company</h2>
          <p className="text-sm">Tech Solutions Inc.</p>
          <p className="text-sm">CEO: John Doe</p>
          <p className="text-sm">Address: 123 Tech Street, Baku</p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-100 text-sm">
            Home
          </a>
          <a href="#" className="hover:text-gray-100 text-sm">
            Employees
          </a>
          <a href="#" className="hover:text-gray-100 text-sm">
            About
          </a>
          <a href="#" className="hover:text-gray-100 text-sm">
            Contact
          </a>
        </div>
      </div>

      <div className="text-center mt-4 text-sm">
        &copy; 2026 Tech Solutions Inc. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
