import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { UserContextProvider } from "./context/context"
function App() {
 

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Content />
        <Footer/>
      </UserContextProvider>
    </div>
  )
}

export default App
