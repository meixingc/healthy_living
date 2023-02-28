import { Link } from "react-router-dom"

export default function MealSearch(props) {
    if (props.mealSearch == null) {
        return (
            <div className='MealSearch-invalid'>
                <Link to='/meals' className='back-to-meals'> Back </Link>
                <h1>Search Invalid: Please enter a valid search.</h1>
            </div>
        )
    }
    else {
        if (props.mealSearchResults) {
            return (
                <div className='MealSearch'>
                    <Link to='/meals' className='back-to-meals'> Back </Link>
                    <div className='search-meals'>
                        {
                            props.mealSearchResults.map((meal) => (
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
        else {
            return (
                <div>
                    <Link to='/meals' className='back-to-meals'> Back </Link>
                    <h1> Meal not found. </h1>
                </div>
            )
        }
        
    }
}