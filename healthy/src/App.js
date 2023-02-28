import './App.css';
import { MEALS_BASE_URL } from './global';
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
        const [selectedMealSearch, setSelectedMealSearch] = useState(null)
        const [selectedMealSearchInfo, setSelectedMealSearchInfo] = useState([])
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
      // get selected searched meal
      const getSelectedMealSearch = (id) => {
        setSelectedMealSearch(id)
      }
      // get selected searched meal info
      useEffect(() => {
        const getSelectedMealSearchInfo = async() => {
          const response = await axios.get(`${MEALS_BASE_URL}lookup.php?i=${selectedMealSearch}`)
          setSelectedMealSearchInfo(response.data.meals)
        }
        if (selectedMealSearch) {
          getSelectedMealSearchInfo()
        }
        console.log( `slece ${selectedMealSearch}`)

      }, [selectedMealSearch])

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
            getSelectedMealSearch={getSelectedMealSearch}
            selectedMealSearch={selectedMealSearch}
            selectedMealSearchInfo={selectedMealSearchInfo}/>
    </div>
  );
}

export default App;
