import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( _category ) => {

    const [state, setState ] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        
        getGifs( _category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false,
                })
            });
    }, [ _category ])

    return state;

}