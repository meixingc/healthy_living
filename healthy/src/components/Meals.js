import { Link } from "react-router-dom"

export default function Meals(props) {
    return (
        <div>
            {
                props.mealCategories.map((category) => (
                    <div key={category.strCategory} className='item category'>
                        <Link to={`/meals/${category.strCategory}`} onCLick={() => (props.getChosenCategory(category.strCategory))}>{category.strCategory}</Link>
                    </div>
                ))
            }
        </div>
    )
}