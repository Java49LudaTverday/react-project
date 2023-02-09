import { is } from "immer/dist/internal";
import { NavLink, Outlet } from "react-router-dom"
import './navigators.css'
export const Layout: React.FC = () => {
    function activeLink (isActive:boolean): React.CSSProperties|undefined{
        let res: React.CSSProperties = {};
        if(isActive){
          return  res = {backgroundColor: 'blue', color: 'white'}
        }
    }
    return <div>
        <nav>
            <ul className = "navigator-list">
                <li className = "navigator-item">
                    <NavLink style = {({isActive}) => activeLink(isActive)} to={"/"}>Home</NavLink>
                </li>
                <li className = "navigator-item">
                    <NavLink style = {({isActive}) => activeLink(isActive)} to={"/customers"}>Customers</NavLink>
                </li>
                <li className = "navigator-item">
                    <NavLink style = {({isActive}) => activeLink(isActive)} to={"/orders"}>Orders</NavLink>
                </li>
                <li className = "navigator-item">
                    <NavLink style = {({isActive}) => activeLink(isActive)} to={"/products"}>Products</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>

}