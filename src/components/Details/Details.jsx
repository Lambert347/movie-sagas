import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

function Details(){
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    console.log(details);

    // const getDetails = () => {
    //     dispatch({type: 'GET_DETAILS'})
    // }

    // useEffect(() => {
    //     getDetails();
    // }, []);
    
    return (
        <section>
            {details.map(detail => {
                return (
                    <div key={detail.id} >
                        <img src={detail.poster} />
                    </div>
                )
            })}
        </section>
    )
}

export default Details;