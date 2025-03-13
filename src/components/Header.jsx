export default function Header({ setCity }) {
  return (
    <nav id="header" className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div
        className="text-xl  font-bold text-blue-600 hover:cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="max-sm:hidden ">🌤️</i>
        WeatherMe
      </div>

      {/* Input tìm kiếm */}
      <input
        type="text"
        placeholder="Tìm kiếm địa điểm..."
        className="w-64 px-4 py-2 border border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            if (event.target.value) {
              setCity(event.target.value);
              console.log("enter");
            }
          }
        }}
      />
    </nav>
  );
}
