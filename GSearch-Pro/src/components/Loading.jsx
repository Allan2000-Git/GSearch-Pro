import React from 'react'
import {Puff} from 'react-loader-spinner'

const Loading = () => {
    return (
        <>
            <div className="flex items-center justify-center m-4">
                <Puff
                    height="40"
                    width="40"
                    radius={1}
                    color="#17A398"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </>
    )   
}

export default Loading
