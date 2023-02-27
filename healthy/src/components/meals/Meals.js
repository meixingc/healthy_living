import { Link } from "react-router-dom"

export default function Meals(props) {
    return (
        <div className='Meals'>
            {
                props.mealCategories.map((category) => (
                    <div key={category.strCategory} className='meal-category'>
                        <img src={category.strCategoryThumb} className='category-img'/>
                        <Link to={`/meals/${category.strCategory}`} onClick={() => (props.getChosenCategory(category.strCategory))} className='category-link'>{category.strCategory}</Link>
                    </div>
                ))
            }
        </div>
    )
}