import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-white via-indigo-100 to-indigo-100 shadow-lg p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <div className="text-xl font-semibold text-black tracking-tight">
            Home
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="#">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-black-300 hover:translate-x-2 mr-4">
              Add Your Theory
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
