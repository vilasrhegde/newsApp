import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';

function App() {
  let[value, setValue] = useState("");

  async function fetch_data(){
    let response= await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=b4a1047aafee462f8a3800f8267bb293");
    
    // let response= await fetch("https://newsdata.io/api/1/news?apikey=pub_371300c2a3694f1f02d178f38b890bdfece3&country=au");

    let result= await response.json();

    console.log(result);
    console.log(result.articles);

    let data=result.articles.map((a)=>{return (        <div className="p-10">  

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={a.urlToImage} alt="Mountain" />
      <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{a.title}</div>
        <p className="text-gra  y-700 text-base">
          {a.description}
        </p>
        <a className='font-bold text-xl mb-2' href={a.url}>Read More</a>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{a.source.  name}</span>
      </div>
    </div>
  </div>)})
    console.log(data);
    setValue(data);
  }
  fetch_data();
  return (
    <div className="App">
      <Navbar />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {value ? value : <h1 className="font-bold text-center text-xl mb-2">Can't get data from the News AP<br></br>Daily limit exceeded.</h1>}
      </div> 

 

</div>



  );
}

export default App;
