import { Link } from "react-router-dom"

export default function MealsByCategory(props) {
    return (
        <div className='MealsByCategory'>
            <Link to='/meals' className='back-to-meals'> Back </Link>
            <div className='list-meals'>
                {
                    props.categoryMeals.map((meal) => (
                        <div key={meal.idMeal} className='meal'>
                            <img src={meal.strMealThumb} className='meal-img'/>
                            <Link to={`/meals/${props.chosenCategory}/${meal.idMeal}`} onClick={() => (props.getSelectedMeal(meal.idMeal))} className='meal-name'>{meal.strMeal}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}