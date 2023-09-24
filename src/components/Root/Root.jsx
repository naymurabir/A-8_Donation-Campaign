import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
            <Header></Header>

            <Outlet></Outlet>
        </div>
    );
};

export default Root;