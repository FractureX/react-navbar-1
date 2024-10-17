import logo from "./assets/logo.svg"
import { DesktopMenu } from "./components/menu/desktop/DesktopMenu"
import { MobileMenu } from "./components/menu/mobile/MobileMenu"
import { MenuData } from "./data/menu"

function App() {

  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A]">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={logo} alt="logo" className="size-8" />
            <h3 className="text-lg font-semibold">
              Shaqmv
            </h3>
          </div>
          {/* Menú */}
          {/* Desktop */}
          <ul className="lg:flex-center hidden gap-x-1">
            {
              MenuData.map(menu => (
                <DesktopMenu 
                  menu={menu}
                />
              ))
            }
          </ul>
          <div className="flex-center gap-x-5">
            <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl">
              Sign in
            </button>
            <div className="lg:hidden">
              <MobileMenu MenuData={MenuData}/>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default App