import { NavLink, useNavigate } from "react-router-dom";

export default function Header({ setCity , loading}) {
  const navigate = useNavigate();
  return (
    <nav
      id="header"
      className="fixed z-10 top-0 w-full bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="flex items-center justify-between px-6 xs:px-6 pt-3">
        {/* Logo */}
        <div
          className="text-xl font-bold text-blue-600 hover:cursor-pointer max-xs:hidden"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="max-sm:hidden">🌤️</i>
          WeatherMe
        </div>

        {/* Input tìm kiếm và loading spin*/}
        <div className="flex max-xs:flex-1 xs:flex-row-reverse">

          <input
            type="text"
            placeholder="Tìm kiếm thành phố..."
            className="w-60 px-4 py-2 mx-2 max-xs:flex-1 border border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                if (event.target.value) {
                  setCity(event.target.value);
                  console.log("enter");
                  navigate('/', { replace: true })
                }
              }
            }}
          />
          {/* loading spiner */}
          <div className={`flex justify-center items-center  ${loading? 'visible': 'invisible'}`}>
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
      {/* Dải Navbar */}
      <div className="mt-2 flex justify-around max-[689px]:overflow-x-scroll space-x-4 text-sm font-semibold text-gray-700">
        {[
          { name: "Hiện tại", path: "/" },
          { name: "Theo giờ", path: "/hourly" },
          { name: "Ngày mai", path: "/tomorrow" },
          { name: "3 ngày", path: "/3days" },
          { name: "5 ngày", path: "/5days" },
          { name: "7 ngày", path: "/7days" },
          { name: "14 ngày", path: "/14days" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="px-4 py-2 mr-0 w-24 shrink-0 text-center hover:bg-blue-500 hover:text-white transition duration-200"
            // Thêm class 'active' khi đường dẫn khớp
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#3b82f6' : '',
              color: isActive ? 'white' : '',
            })}
            onClick={() => {
              // Nếu đang ở trang này, cuộn lên đầu trang
              if (window.location.pathname === item.path) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
