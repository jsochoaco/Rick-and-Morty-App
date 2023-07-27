import styles from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const [id,setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value);
    };
   return (
      <div className={styles.barrasuperior}>
         <h3>Add Character </h3>
         <input placeholder="Enter ID" type='search' value={id} onChange={handleChange}/>
         <button  onClick={()=>props.onSearch(id)}>Add</button>
      </div>
   );
}
