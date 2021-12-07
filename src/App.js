import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import SearchResultPage from "./components/SearchResultPage/SearchResultPage";
const App =() => {

    const [searchTerm, setSerchTerms]= useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        // Stop standard behavior (satndarbeteende)
        e.preventDefault();
        
        navigate(`/search?q=${searchTerm}`);
    //     setSerchTerms("");
 }

  return(  
<div className="container">
<header >
     <div className="header-container">
         <div className="v-container search-bar-container">
             <div className="h-container flex-direction-row">
                 <img src="./image/FreakyFashionLogo1.png"
                      alt="Logotype"
                      width="80" height="80" />

                 <form 
                 onSubmit={handleSubmit}
                 className="v-container search-bar-container header-flex-direction"
                 >
                     <input className="search-bar"
                            type="search"
                            aria-label="Search"
                            placeholder="Sök..."
                            name="q"
                            value={searchTerm}
                            onChange ={(event)=> setSerchTerms(event.target.value)}
                             />
                     <i className="material-icons left-on-top">search</i>
                 </form>
             </div>
         </div>
             <div className="v-container align-items-central">
                 <div className="h-container flex-direction-row">
                     <a className="icon" href="login.html">
                         <i className="fa fa-sign-in" style={{fontSize: '30px'}}></i>
                     </a>
                     <a className="icon" href="shopping.html">
                         <i className="fa fa-shopping-cart" style={{fontSize: '30px'}}></i>
                     </a>

                 </div>
             </div>
      </div>
</header>

<main>
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="products/:urlSlug" element={<ProductDetailsPage />} />
      <Route path="search" element={<SearchResultPage />} /> 
    </Routes>
</main>

     <footer className="footer-container">
        <div className="footer-icons">
            <div>
                <i className="fa fa-globe" style={{fontSize: '30px'}}></i>
                <label for="footer-icons">Gratis Frakt och Returer</label>
            </div>

            <div>
                <i className="fa fa-plane" style={{fontSize: '30px'}}></i>
                <label for="footer-icons">expressfrakt</label>
            </div>

            <div>
                <i className="fa fa-shield" style={{fontSize: '30px'}}></i>
                <label for="footer-icons">säkra Betalningar</label>
            </div>

            <div>
                <i className="fa fa-smile-o" style={{fontSize: '30px'}}></i>
                <label for="footer-icons">Nyheter varje dag</label>
            </div>
        </div>
        <div className="footer-column">
            <ul className="column">
                <li><a href="#"><h3>Shopping</h3> </a></li>
                <li><a href="#">Vinterjackor</a></li>
                <li><a href="#">Pufferjackor</a></li>
                <li><a href="#">Kappa</a></li>
                <li><a href="#">Trenchcoots</a></li>
            </ul>

            <ul className="column">
                <li><a href="#"><h3>Mina Sidor</h3></a></li>
                <li><a href="#">Mina Ordrar</a></li>
                <li><a href="#">Mitt Konto</a></li>
            </ul>

            <ul className="column">
                <li><a href="#"><h3>Kund tjänst</h3></a></li>
                <li><a href="#">Returnpolicy</a></li>
                <li><a href="#">Integritetspalicy</a> </li>
            </ul>

            <div className="language">
                <div className="landOchSpråk">Välj land och språk</div>
                <div for="land">Land</div>
                <select className="footer-select" name="land">
                    <option value="sverige">Sverige</option>
                    <option value="USA">USA</option>
                    <option value="tyskland">tyskland</option>
                </select>

                <div for="språk">språk</div>
                <select className="footer-select" name="språk">
                    <option value="svenska">Svenska</option>
                    <option value="engelska">engelska</option>
                    <option value="tyska">tyska</option>
                </select>
            </div>
        </div>
        <small>Copyright 2021 Freaky Fashion</small>
    </footer>
    </div>
    )
}
export default App;