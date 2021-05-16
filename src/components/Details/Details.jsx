import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

function Details(){
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    
    
    return (
        <div>
            {JSON.stringify(details.description)}
        </div>
    )
}

export default Details;