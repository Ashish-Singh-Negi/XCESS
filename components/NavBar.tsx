const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-2 text-black">
      <button className="px-6 py-2 bg-yellow-400 rounded-3xl font-medium cursor-pointer">
        Home
      </button>
      <button className="px-6 py-2 rounded-3xl font-medium cursor-pointer">
        Travel
      </button>
      <button className="px-6 py-2 rounded-3xl font-medium cursor-pointer">
        Track
      </button>
      <button className="px-6 py-2 rounded-3xl font-medium cursor-pointer">
        About
      </button>
    </div>
  );
};
export default NavBar;
