import { Link } from "react-router-dom"

export default function Meals(props) {
    return (
        <div className='Meals'>
            <form className='meal-search-bar' onSubmit={() => props.mealSearchbarSubmit}>
                <input type='text' className='meal-search-input' value={props.mealSearchbar} placeholder='Search for Meals' onChange={props.mealSearchbarChange}/>
                <div className='meal-search-submit-ctn'>
                    <Link to={`/meals/search/${props.mealSearch}`} type='submit' className='meal-search-submit'>Search</Link>
                </div>
            </form>
            <div className='meal-categories'>
                {
                    props.mealCategories.map((category) => (
                        <div key={category.strCategory} className='meal-category'>
                            <img src={category.strCategoryThumb} className='category-img'/>
                            <Link to={`/meals/${category.strCategory}`} onClick={() => (props.getChosenCategory(category.strCategory))} className='category-link'>{category.strCategory}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}