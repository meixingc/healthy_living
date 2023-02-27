import { Link } from "react-router-dom"

export default function Meal(props) {
    let ingredients = []
    if (props.selectedMeal && props.selectedMealInfo){
            if (props.selectedMealInfo[0].strIngredient1){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure1} ${props.selectedMealInfo[0].strIngredient1}`)
            }
            if (props.selectedMealInfo[0].strIngredient2){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure2} ${props.selectedMealInfo[0].strIngredient2}`)
            }
            if (props.selectedMealInfo[0].strIngredient3){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure3} ${props.selectedMealInfo[0].strIngredient3}`)
            }
            if (props.selectedMealInfo[0].strIngredient4){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure4} ${props.selectedMealInfo[0].strIngredient4}`)
            }
            if (props.selectedMealInfo[0].strIngredient5){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure5} ${props.selectedMealInfo[0].strIngredient5}`)
            }
            if (props.selectedMealInfo[0].strIngredient6){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure6} ${props.selectedMealInfo[0].strIngredient6}`)
            }
            if (props.selectedMealInfo[0].strIngredient7){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure7} ${props.selectedMealInfo[0].strIngredient7}`)
            }
            if (props.selectedMealInfo[0].strIngredient8){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure8} ${props.selectedMealInfo[0].strIngredient8}`)
            }
            if (props.selectedMealInfo[0].strIngredient9){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure9} ${props.selectedMealInfo[0].strIngredient9}`)
            }
            if (props.selectedMealInfo[0].strIngredient10){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure10} ${props.selectedMealInfo[0].strIngredient10}`)
            }
            if (props.selectedMealInfo[0].strIngredient11){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure11} ${props.selectedMealInfo[0].strIngredient11}`)
            }
            if (props.selectedMealInfo[0].strIngredient12){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure12} ${props.selectedMealInfo[0].strIngredient12}`)
            }
            if (props.selectedMealInfo[0].strIngredient13){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure13} ${props.selectedMealInfo[0].strIngredient13}`)
            }
            if (props.selectedMealInfo[0].strIngredient14){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure14} ${props.selectedMealInfo[0].strIngredient14}`)
            }
            if (props.selectedMealInfo[0].strIngredient15){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure15} ${props.selectedMealInfo[0].strIngredient15}`)
            }
            if (props.selectedMealInfo[0].strIngredient16){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure16} ${props.selectedMealInfo[0].strIngredient16}`)
            }
            if (props.selectedMealInfo[0].strIngredient17){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure17} ${props.selectedMealInfo[0].strIngredient17}`)
            }
            if (props.selectedMealInfo[0].strIngredient18){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure18} ${props.selectedMealInfo[0].strIngredient18}`)
            }
            if (props.selectedMealInfo[0].strIngredient19){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure19} ${props.selectedMealInfo[0].strIngredient19}`)
            }
            if (props.selectedMealInfo[0].strIngredient20){
                ingredients.push(`${props.selectedMealInfo[0].strMeasure20} ${props.selectedMealInfo[0].strIngredient20}`)
            }
        return (
            <div className='meal-all'>
                <Link to={`/meals/${props.chosenCategory}`}> Back </Link>
                <h1>{props.selectedMealInfo[0].strMeal}</h1>
                <div className='other-info'>
                    <img src={props.selectedMealInfo[0].strMealThumb} className='meal-img'/>
                    <div className='other-info-right'>
                        <h3> Area : {props.selectedMealInfo[0].strArea} </h3>
                        <a href={props.selectedMealInfo[0].strYoutube}> Youtube Tutorial </a>
                    </div>     
                </div>
                <div className='meal-info'>
                    <div className='ingredients-section'>
                        <h2> Ingredients </h2>
                        <ul className='ingredients-list'>
                        {
                            ingredients.map((ingredient) => (
                                <div key={ingredient} className='ingredient'>
                                    <li>{ingredient}</li>
                                </div>
                            ))                   
                        }
                        </ul>
                    </div>
                    <div className='instructions-section'>
                        <h2> Instructions </h2>
                        {props.selectedMealInfo[0].strInstructions}
                    </div>
                </div>
            </div>
        )
    }   
    else {
        return <h1>Loading plz wait</h1>
    }
}