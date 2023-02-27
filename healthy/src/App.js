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
    // for Meals.js
      const [mealCategories, setMealCategories] = useState([])
      const [chosenCategory, setChosenCategory] = useState(null)
    // for MealsByCategory.js
      const [categoryMeals, setCategoryMeals] = useState([])
    //for Meal.js
      const [selectedMeal, setSelectedMeal] = useState(null)
      const [selectedMealInfo, setSelectedMealInfo] =useState(null)

    // Meals.js : gets meal categories
      useEffect(() => {
        const getMealCategories = async() => {
          const response = await axios.get(`${MEALS_BASE_URL}categories.php`)
          setMealCategories(response.data.categories)
        }
        getMealCategories()
      }, [])
      // Meals.js : gets chosen meal category
      const getChosenCategory = (category) => {
        setChosenCategory(category)
      }

    // MealsByCategory.js : gets all meals in a category
      useEffect(() => {
        const getCategoryMeals = async() => {
          const response = await axios.get(`${MEALS_BASE_URL}filter.php?c=${chosenCategory}`)
          setCategoryMeals(response.data.meals)
        }
        if (chosenCategory) {
          getCategoryMeals()
        }
      }, [chosenCategory])

    // Meal.js : get selected meal
      const getSelectedMeal = (meal) => {
        setSelectedMeal(meal)
      }
    // Meal.js : get selected meal info
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
            selectedMealInfo={selectedMealInfo}/>
    </div>
  );
}

export default App;
