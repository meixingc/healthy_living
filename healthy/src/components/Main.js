import { Route,Routes } from "react-router-dom"

// home import
import Home from "./Home"

// meal imports
import Meals from "./meals/Meals"
import MealsByCategory from "./meals/MealsByCategory"
import MealSearch from "./meals/MealSearch"
import Meal from "./meals/Meal"

// workout imports
import Workouts from "./workouts/Workouts"

// tracker imports
import Trackers from "./trackers/Tracker"


export default function Main(props) {
    return (
        <div>
            <Routes>
                // Home section
                    <Route exact path='/' element={<Home />} />

                // Meals section
                    // Meals.js
                    <Route  exact path='/meals' 
                            element={<Meals mealSearchbar={props.mealSearchbar}
                                            mealSearchbarChange={props.mealSearchbarChange}
                                            mealSearchbarSubmit={props.mealSearchbarSubmit}
                                            mealSearch={props.mealSearch}
                                            mealCategories={props.mealCategories} 
                                            getChosenCategory={props.getChosenCategory}/>} />
                    // MealsByCategory.js
                    <Route  exact path='/meals/:category' 
                            element={<MealsByCategory   chosenCategory={props.chosenCategory} 
                                                        getCategoryMeals={props.getCategoryMeals} 
                                                        categoryMeals={props.categoryMeals} 
                                                        getSelectedMeal={props.getSelectedMeal}/>} />
                    // MealSearch.js
                    <Route  exact path='/meals/search/:id' 
                            element={<MealSearch    mealSearch={props.mealSearch}
                                                    mealSearchbar={props.mealSearchbar}
                                                    mealSearchbarChange={props.mealSearchbarChange}
                                                    mealSearchbarSubmit={props.mealSearchbarSubmit}
                                                    mealSearchResults={props.mealSearchResults}/>} />
                    // Meal.js
                    <Route  exact path={`/meals/${props.chosenCategory}/:id`} 
                            element={<Meal  selectedMeal={props.selectedMeal} 
                                            selectedMealInfo={props.selectedMealInfo}
                                            chosenCategory={props.chosenCategory}/>} />

                // Workouts section
                    // Workouts.js
                    <Route exact path='/workouts' element={<Workouts />} />

                // Trackers section
                <Route exact path='/trackers' element={<Trackers />} />
            </Routes>
        </div>
    )
}