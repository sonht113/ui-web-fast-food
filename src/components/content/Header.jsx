function Header() {
  return (
    <div className="Header flex justify-between items-center pt-5">
      <div className="TitleContent">
        <span className="text-4xl font-medium">Menu 
            <span className="text-4xl font-extralight"> Category</span>
        </span>
      </div>
      <div className="SearchInput flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 mr-2 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
        type="text"
        name="name"
        placeholder="Search for food, coffe, etc."
        class="w-80 py-2 border-b border-gray-400 outline-none focus:border-green-400"
      />
      </div>
    </div>
  );
}

export default Header;
