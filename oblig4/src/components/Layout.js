import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className='header'>
              <Outlet />
            <h1>James Bond filmer</h1>
        </div>
    );
}