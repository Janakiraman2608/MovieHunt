import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";

function Header() {
  const navigate = useNavigate()
  return (
    <div className="flex h-14 justify-between items-center p-2 shadow-lg  shadow-slate-100/50">
      <h1 className="hidden sm:block flex-1 text-2xl pl-3 cursor-pointer" onClick={()=>navigate("/")}>Movie Hunt</h1>
      <Nav></Nav>
      <Search></Search>
    </div>
  );
}

export default Header;
