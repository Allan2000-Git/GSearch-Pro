import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const fetchData = async (type) => {

        const url = "https://google-search72.p.rapidapi.com"
        
        setIsLoading(true)

        try {
            const response = await fetch(`${url}${type}`,{
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'd82ef8a8edmsh68eac7e5503ce06p1782c5jsn59298a13514f',
                    'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
                }
            });

            const result = await response.json();
            
            setData(result.items)
            setIsLoading(false)

            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <ResultContext.Provider value={{data, fetchData, searchInput, setSearchInput, isLoading}}>
        {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)
