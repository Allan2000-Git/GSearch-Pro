import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultsContextProvider'
import Loading from './Loading';

const Results = () => {

    const {data, fetchData, searchInput, setSearchInput, isLoading} = useResultContext();

    const location = useLocation();

    useEffect(() => {
        if (searchInput !== '') {
            if (location.pathname === '/search') {
                fetchData(`/search?q=${searchInput}&num=20`);
            } else {
                fetchData(`${location.pathname}?q=${searchInput}&num=20`);
            }
        }
    }, [searchInput, location.pathname]);

    if(isLoading){
        return <Loading />
    }

    switch(location.pathname){
        case "/search": 
            return(
                <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
                    {data?.map(({ link, title }, index) => (
                        <div key={index} className="md:w-2/5 w-full">
                        <a href={link} target="_blank" rel="noreferrer">
                            <p className="text-lg">{link}</p>
                            <p className="text-xl hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                        </a>
                        </div>
                    ))}
                </div>
            )
            case '/imagesearch':
                return (
                    <div className="flex flex-wrap justify-center items-center">
                            {data?.map((item, index) => (
                            <a href={item.originalImageUrl} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                                <img src={item.thumbnailImageUrl} alt={item.title} loading="lazy" />
                                <p className="sm:w-36 w-36 break-words text-sm mt-2">{item.title}</p>
                            </a>
                            ))}
                        </div>
                );
    }
}

export default Results
