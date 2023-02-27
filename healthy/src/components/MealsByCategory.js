export default function MealsByCategory(props) {
    return (
        <div>
            {
                props.categoryMeals.map((meal) => (
                    <div key={meal.idMeal} className='item meal'>
                        <h1>{meal.strMeal}</h1>
                    </div>
                ))
            }
        </div>
    )
}