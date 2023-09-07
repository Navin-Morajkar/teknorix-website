import React, { useEffect } from 'react';

export default function HeaderTest({ data }) {
    // useEffect(() => {
        
    //     debugger
    //     console.log(data)
    // }, [data]);

    //const {attributes} = data; // Destructure the attributes object
    return (
        <div>
            {
                data ?
                <>
                    <h1>{data.attributes.title}</h1>
                    <p>{data.attributes.description}</p>
                </>
                : <></>
            }
        </div>
    );
}
