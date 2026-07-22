import { useState } from "react";
import axios from "axios";

const SearchBuyers = () => {

    const [keyword, setKeyword] = useState("Singing Bowls");

    const handleSearch = async () => {

        const res = await axios.post(
            "http://127.0.0.1:5000/api/search",
            {
                keyword
            }
        );

        console.log(res.data);
    };

    return (
        <div style={{padding:"40px"}}>

            <h1>Search Buyers</h1>

            <input
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>

        </div>
    )
}

export default SearchBuyers;