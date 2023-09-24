import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;