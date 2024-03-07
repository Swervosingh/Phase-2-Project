import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuestionPage from './components/QuestionPage'
import MyPage from './components/MyPage'
function Main() {

    const routes = createBrowserRouter([
        {
            path:  "/",
            element: <MyPage />,
            children: [
                {
                    path: "/",
                    element: <h1>Welcome to NBA trivia</h1>
                },
                {
                    path: "/quiz/:team",
                    element: <QuestionPage /> 
                }
            ]
        }, 
        {
            path: "*",
            element: <h1>404</h1>
        }
    ])
    

    return(
        <RouterProvider router={routes} />
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <Main />
  
)
