import Link from "next/link";


const NavBar = () => {
  return (
    <div className="">


      <div>
      <ul className="flex">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Protagonistas</Link>
       
          </li>
        <li>
          <Link href={"/"}>Personagens</Link>
          </li>
        <li>
          <Link href={"/"}>Mapas</Link>
          </li>
      
      </ul>
       
          <Link href={"/"}>Entrar</Link>
          
        
      </div>
      
    </div>
  )
}

export default NavBar;