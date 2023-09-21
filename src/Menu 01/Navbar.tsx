import MenuIcon from "../assets/MenuIcon";

interface Props {
  toggleMenu: () => void;
}

function Navbar({ toggleMenu }: Props) {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div>
        <h2 className="text-gray-100 text-xl uppercase">PORTFOLIO</h2>
      </div>

      <button onClick={toggleMenu}>
        <MenuIcon />
      </button>
    </header>
  );
}
export default Navbar;
