import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Category from "../Category/Category";


const Categories = ({ searchCategory }) => {

    const [categories, setCategories] = useState([])

    const [category, setCategory] = useState([])


    useEffect(() => {
        fetch("/categories.json")
            .then(response => response.json())
            .then((data) => {
                setCategories(data);
                setCategory(data);
            });
    }, []);

    useEffect(() => {
        if (searchCategory) {
            const filterSearchText = category.filter(
                (categories) => categories.category_type === searchCategory
            );
            setCategories(filterSearchText);
            console.log(filterSearchText);
        } else {
            setCategories(categories);
        }
    }, [category, searchCategory]);



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

Categories.propTypes = {
    searchCategory: PropTypes.object.isRequired
}

export default Categories;