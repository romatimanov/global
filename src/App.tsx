import { useState } from "react";
import "./App.module.css";
import { Header } from "./Header/header";
import { Menu } from "./Menu/menu";
import { MyContextProvider } from "./contextProvider";
import { useAnimateMain } from "./hook/animate/useAnimateMain";
import { RenderPage } from "./renderPage";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useAnimateMain({
    isMenuOpen,
    content: "main-content__active",
    shrink: "main-shrink__active",
  });

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MyContextProvider>
      <main className={`container mx-auto h-screen main-shrink__active`}>
        <div className={`flex flex-col items-center main-content__active`}>
          <Header onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
          <RenderPage onMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
        </div>
        <Menu isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      </main>
    </MyContextProvider>
  );
}

export default App;
