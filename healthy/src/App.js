import './App.css';
import { MEALS_BASE_URL } from './global';
import { WORKOUT_BASE_URL } from './global';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  // User
    // for logIn.js
      const initialCreateAccount = {
        userName: '',
        password: '',
        passwordConfirm: '',
        valid: false
      }
      const [createAccount, setCreateAccount] = useState(initialCreateAccount)
      const [logIn, setLogIn] = useState()





  // Meals
    // declare states
      // for Meals.js
        const initialMealSearchbarState = ''
        const [mealSearchbar, setMealSearchbar] = useState(initialMealSearchbarState)
        const [mealCategories, setMealCategories] = useState([])
        const [chosenCategory, setChosenCategory] = useState(null)
      // for MealsByCategory.js
        const [categoryMeals, setCategoryMeals] = useState([])
      // for MealSearch.js
        const [mealSearch, setMealSearch] = useState('')
        const [mealSearchResults, setMealSearchResults] = useState([])
      // for Meal.js
        const [selectedMeal, setSelectedMeal] = useState(null)
        const [selectedMealInfo, setSelectedMealInfo] =useState(null)

    // Meals.js 
      // changes meal searchbar value
        const mealSearchbarChange = (e) => {
          setMealSearchbar(e.target.value)
          setMealSearch(e.target.value)
       }
      // meal searchbar submit 
        const mealSearchbarSubmit = async function(e) {
          e.preventDefault()
          setMealSearchbar(initialMealSearchbarState)
        }
      // gets meal categories
        useEffect(() => {
          const getMealCategories = async() => {
            const response = await axios.get(`${MEALS_BASE_URL}categories.php`)
            setMealCategories(response.data.categories)
          }
          getMealCategories()
        }, [])
      // gets chosen meal category
        const getChosenCategory = (category) => {
          setChosenCategory(category)
        }

    // MealsByCategory.js 
      // gets all meals in a category
        useEffect(() => {
          const getCategoryMeals = async() => {
            const response = await axios.get(`${MEALS_BASE_URL}filter.php?c=${chosenCategory}`)
            setCategoryMeals(response.data.meals)
          }
          if (chosenCategory) {
            getCategoryMeals()
          }
        }, [chosenCategory])
      // get selected meal
        const getSelectedMeal = (meal) => {
          setSelectedMeal(meal)
        }

    // MealSearch.js
      // gets meal search results
        useEffect(() => {
          const getMealSearchResults = async() => {
            const response = await axios.get(`${MEALS_BASE_URL}search.php?s=${mealSearch}`)
            setMealSearchResults(response.data.meals)
          }
          if (mealSearch) {
            getMealSearchResults()
          }
        }, [mealSearch])
    // Meal.js  
      // get selected meal info
        useEffect(() => {
          const getSelectedMealInfo = async() => {
            const response = await axios.get(`${MEALS_BASE_URL}lookup.php?i=${selectedMeal}`)
            setSelectedMealInfo(response.data.meals)
          }
          if (selectedMeal) {
            getSelectedMealInfo()
          }
        }, [selectedMeal])


  // Workouts
    // declare states
      // Workout.js
        const stuff = ['arms', 'legs', 'abs']

        const [allWorkouts, setAllWorkouts ] = useState([])
        const [workoutCategory, setWorkoutCategory] = useState([])
        const [chosenWorkoutCategory, setChosenWorkoutCategory] = useState(null)
        const [chosenWorkoutId, setChosenWorkoutId] = useState('')
        




      
    // Workout.js
      // gets all exercise
        useEffect(() => {
          const getAllWorkouts = async() => {
            const response = await axios.get(`${WORKOUT_BASE_URL}exerciseinfo/?format=json&limit=1156&offset=0`)
            let list = []
            response.data.results.map((item) => {
              if (item.language.id == 2) {
                list.push(item)
              }
            })
            setAllWorkouts(list)
          }
          getAllWorkouts()
        }, [])
      // filter categories
        useEffect(() => {
          const getWorkoutCategory = () => {
            let list = allWorkouts
            let filteredList = []
            let arms = [{id : 'arms'}]
            let abs = [{id : 'abs'}]
            let back = [{id : 'back'}]
            let calves = [{id : 'calves'}]
            let cardio = [{id : 'cardio'}]
            let chest = [{id : 'chest'}]
            let legs = [{id : 'legs'}]
            let shoulders = [{id : 'shoulders'}]
            list.map((item) => {
              switch (item.category.id) {
                case 10 :
                  abs.push(item)
                  break
                case 8 : 
                  arms.push(item)
                  break
                case 12 :
                  back.push(item)
                  break
                case 14 :
                  calves.push(item)
                  break
                case 15 :
                  cardio.push(item)
                  break
                case 11 :
                  chest.push(item)
                  break
                case 9 :
                  legs.push(item)
                  break
                case 13 :
                  shoulders.push(item)
                  break
                }
              }
            )
            filteredList.push(arms, legs, abs, chest, back, shoulders, calves, cardio)
            setWorkoutCategory(filteredList)
          }
          getWorkoutCategory()
        }, [allWorkouts])
      // get chosen category
        const getChosenWorkoutCategory = (chosen) => {
            setChosenWorkoutId(stuff[chosen])
            console.log(stuff[chosen])
            setChosenWorkoutCategory(workoutCategory[chosen])
          console.log(workoutCategory[chosen][0].id)
        }
        // workoutCategory[chosen][0].id

  return (
    <div className="App">
      <Header />
      <Main // Meals
            mealCategories={mealCategories}
            getChosenCategory={getChosenCategory}
            chosenCategory={chosenCategory}
            categoryMeals={categoryMeals}
            getSelectedMeal={getSelectedMeal}
            selectedMeal={selectedMeal}
            selectedMealInfo={selectedMealInfo}
            mealSearchbar={mealSearchbar}
            mealSearchbarChange={mealSearchbarChange}
            mealSearchbarSubmit={mealSearchbarSubmit}
            mealSearch={mealSearch}
            mealSearchResults={mealSearchResults}
            allWorkouts={allWorkouts}
            setWorkoutCategory={setWorkoutCategory}
            workoutCategory={workoutCategory}
            getChosenWorkoutCategory={getChosenWorkoutCategory}
            chosenWorkoutCategory={chosenWorkoutCategory}
            chosenWorkoutId={chosenWorkoutId}/>
    </div>
  );
}

export default App;
