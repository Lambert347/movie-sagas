import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

function Details(){
    const dispatch = useDispatch();
    const [details, setDetails] = useState([]);
    const getDetails = () => {
        dispatch({type: 'GET_DETAILS', payload: response.data});
        setDetails(response.data);
    }
    useEffect(() => {
        getDetails();
    }, [])
    
    return (
        <div>
            {JSON.stringify(details)}
        </div>
    )
}

export default Details;