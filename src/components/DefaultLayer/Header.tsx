import { Nav } from "./components/Nav";
import { NavNews } from "./components/NavNews";

export const Header = () => {
  return (
    <header className="p-0 m-0">
      <NavNews />
      <Nav />
    </header>
  );
};
