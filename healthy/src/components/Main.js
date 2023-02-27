import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import Meals from "./Meals"
import Workouts from "./Workouts"
import Trackers from "./Tracker"
import MealsByCategory from "./MealsByCategory"

export default function Main(props) {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home />} />

                <Route exact path='/meals' element={<Meals mealCategories={props.mealCategories} getChosenCategory={props.getChosenCategory}/>} />
                <Route exact path='/meals/:category' element={<MealsByCategory chosenCategory={props.chosenCategory} getCategoryMeals={props.getCategoryMeals} categoryMeals={props.categoryMeals}/>} />

                <Route exact path='/workouts' element={<Workouts />} />

                <Route exact path='/trackers' element={<Trackers />} />
            </Routes>
        </div>
    )
}