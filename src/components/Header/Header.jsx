function Header() {
  return (
    <header className="bg-purple-500 text-white p-4 shadow-md mb-[30px]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employees List</h1>

        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Users
          </a>
          <a href="#" className="hover:text-gray-200">
            About
          </a>
        </nav>

        <div>
          <input
            type="text"
            placeholder="Search users..."
            className="px-3 py-1 rounded-md text-black focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
