import { Nav } from "./components/Nav";
import { NavNews } from "./components/NavNews";

export const Header = () => {
  return (
    <header >
      <NavNews />
      <Nav />
    </header>
  );
};
