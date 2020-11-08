import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({ category: _category }) => {

    const { data:images, loading } = useFetchGifs( _category );
    
    /*const [images, setImages] = useState([]);
     useEffect(() => {
        getGifs( category )
            .then( setImages );
    }, [ category ]) */


    return (
        <>
            <h3>{_category} </h3>
            {                loading && <p className=" animate__animated animate__flash"> Cargando...</p>          }
            <div className="card-grid">

                {
                    images.map(img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
