import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(response => response.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-10">
            <h2 className="text-2xl font-semibold">All Category</h2>

            {
                categories.map(category => <NavLink
                    to={`/category/${category.id}`}
                    className="block text-xl ml-5"
                    key={category.id}
                    >
                        {category.name}
                    </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;