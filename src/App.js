// import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { AllProducts } from "./components/Products/AllProducts"
import { SingleProduct } from "./components/SingleProduct/SingleProduct"
import { Cart } from "./components/Cart/Cart"
import SideBar from "./components/SideBar.jsx/SideBar"
import { BrowserRouter } from "react-router-dom"
import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
       <SideBar/>
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
