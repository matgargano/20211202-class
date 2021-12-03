import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [numberOfTimesClicked, setNumberOfTimesClicked] = useState(0);

  useEffect(function(){
    getJoke();
  }, []);

  function getJoke(){
    // setNumberOfTimesClicked(numberOfTimesClicked+1);
    // setJoke('Why did the chicken something something...');
    // console.log('I come right before axios.get');
    setLoading(true);
    axios.get('https://backend-omega-seven.vercel.app/api/getjoke').then(function(response){
      const fetchedJoke = response.data.pop();
      setJoke(<p>{fetchedJoke.question} <br /> {fetchedJoke.punchline}</p>);
      setLoading(false);
    });
    // console.log('I come right after axios.get');


  }

  return (
    <div className="App">
      {!!loading && <p>Loading</p>}
      {!loading && <p>{joke}</p>}
      {/* {numberOfTimesClicked}<br /> */}
      <button disabled={!!loading} onClick={getJoke}>Click for a Joke</button>
    </div>
  );
}

export default App;
