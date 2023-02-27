import './App.css';
import { MEALS_BASE_URL } from './global';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
const [mealCategories, setMealCategories] = useState([])
const [chosenCategory, setChosenCategory] = useState([])
const [categoryMeals, setCategoryMeals] = useState([])

  const getChosenCategory = async(category) => {
    setChosenCategory(category)
  }

useEffect(() => {
  const getCategoryMeals = async() => {
    const response = await axios.get(`${MEALS_BASE_URL}filter.php?c=${chosenCategory}`)
    setCategoryMeals(response.data.meals)
  }
  getCategoryMeals()
}, [chosenCategory])

useEffect(() => {
  const getMealCategories = async() => {
    const response = await axios.get(`${MEALS_BASE_URL}categories.php`)
    setMealCategories(response.data.categories)
  }
  getMealCategories()
}, [])

  return (
    <div className="App">
      <Header />
      <Main mealCategories={mealCategories}
            getChosenCategory={getChosenCategory}
            chosenCategory={chosenCategory}
            setChosenCategory={setChosenCategory}
            categoryMeals={categoryMeals}/>
    </div>
  );
}

export default App;
