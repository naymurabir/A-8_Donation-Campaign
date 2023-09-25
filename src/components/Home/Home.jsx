import { useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";



const Home = () => {

    const [searchCategory, setSearchCategory] = useState('')

    const handleSearchCategory = () => {
        const searchText = document.getElementById('search').value
        setSearchCategory(searchText);
    }

    return (
        <div>
            <Banner handleSearchCategory={handleSearchCategory}></Banner>
            <Categories searchCategory={searchCategory}></Categories>
        </div>
    );
};

export default Home;