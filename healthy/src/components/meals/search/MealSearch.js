import { Link } from "react-router-dom"

export default function MealSearch(props) {
    if (props.mealSearchResults) {
        return (
            <div className='MealSearch'>
                <Link to='/meals' className='back-to-meals'> Back </Link>
                <div className='list-meals'>
                    {
                        props.mealSearchResults.map((meal) => (
                            <div key={meal.idMeal} className='meal'>
                                <img src={meal.strMealThumb} className='meal-img'/>
                                <Link to={`/meals/search/${meal.idMeal}`} onClick={() => (props.getSelectedMeal(meal.idMeal))} className='meal-name'>{meal.strMeal}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='no-meal'>
                <Link to='/meals' className='back-to-meals'> Back </Link>
                <h1> Meal not found. </h1>
            </div>
        )
    }
}