import SingleCard from './components/SingleCard';

function App() {

  const colors  = [
    {color:"#FF6663",title:"PINK"},
    {color:"#333333",title:"GRAY"},
    {color:"#000000",title:"BLACK"},
    {color:"#38BB14",title:"GREEN"},
    {color:"#C90B0B",title:"RED"},
    {color:"#FF8000",title:"ORANGE"},
    {color:"#FFF500",title:"YELLOW"},
    {color:"#CCCCCC",title:"LIGHT GRAY"},
    {color:"#7E41A2",title:"PURPLE"},
    {color:"#C14911",title:"BROWN"}
  ]

  return (
    <div className="AppContainer">
      {colors.map((single_elem,idx) => {
        return(
          <SingleCard  data={single_elem} key={idx}/>
        )
      })}
    
      
    </div>
  );
}

export default App;
