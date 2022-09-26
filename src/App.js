import './App.css';
import Axios from "axios";
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {

  const [query, setquery] = useState("");      //react hooks
  const [recipes, setrecipes] = useState([])
  // const [he  nalthLabels, sethealthLabels]=useState("vegan")

  const YOUR_APP_ID = "752db5ee";
  const YOUR_APP_KEY =
    "fb9cb8c24c2b096b4cb11c85710be8d9";


  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
 

  async function getRecipies() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();     //prevent reloading
    getRecipies();
  }

  return (
    <div className="app">
      <h1 >Food Recipe Area</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className='app__input'
          placeholder='enter ingredients'
          value={query} onChange={(e) => setquery(e.target.value)}
        />
        <input className='app__submit' type="submit" value="Search" />
        {/* <select className="app__healthLabels" > 
          <option onClick={()=>sethealthLabels("vegan")}>Vegan</option>
          <option onClick={()=>sethealthLabels("vegetarian")}>Vegetarian</option>
          <option onClick={()=>sethealthLabels("paleo")}>paleo</option>
          <option onClick={()=>sethealthLabels("low-sugar")}>low-sugar</option>
          <option onClick={()=>sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={()=>sethealthLabels("gluten-free")}>gluten-free</option>
          <option onClick={()=>sethealthLabels("wheat-free")}>wheat-free</option>
          <option onClick={()=>sethealthLabels("peanut-free")}>peanut-free</option>
          <option onClick={()=>sethealthLabels("tree-nut-free")}>tree-nut-free</option>
          <option onClick={()=>sethealthLabels("soy-free")}>soy-free</option>
          <option onClick={()=>sethealthLabels("fish-free")}>fish-free</option>
          <option onClick={()=>sethealthLabels("shellfish-free")}>shellfish-free</option>
        </select> */}

      </form>

      <div className='app__recipes'>
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />;   //in {} recipe is value which we are providing from map and other recipe is value which is accepting
        })}
      </div>

    </div>
  );
}

export default App;
