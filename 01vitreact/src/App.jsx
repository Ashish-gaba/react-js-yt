import Chai from "./chai";

function App() {
  const username = "Chai aur code"

  return (
    // <h1>Chai aur code | Ashish</h1>
    <>
    <Chai />
    <h1>Chai aur react {username}</h1>     
    <p>test para</p>        
    </>                     
    
  )
}

export default App


//{} - returns evaluated expression
//Note
// will not give any output because jsx allows to retun only one element at a tiime
    // Therorre wew wrap it inside a wrapper like div
                          // <> </> is a fragment