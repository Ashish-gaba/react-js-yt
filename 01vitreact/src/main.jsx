import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',

//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

const anotherUser = "Chai aur react"


//TO render custom element
/*
const reactElement = React.createElement(
  'a',                          //type
  { href: 'https://google.com', target: '_blank' }, // Attributes
  'Click me to visit google', // Children
  anotherUser
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
