import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"


import "./Search.scss";
const Search = ({setshowSearch}) => {
    return <div className="search-model">
        <div className="from-field">
            <input 
                 type="text"
                 autoFocus
                 placeholder="search for porducts"
             />
             <MdClose onClick={()=>setshowSearch(false)}/>
        </div>
        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">product name</span>
                <span className="desc">product desc</span>
               
               
            </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
