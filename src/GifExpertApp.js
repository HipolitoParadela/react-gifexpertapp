import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['Maradona', 'Messi', 'Ronaldinho', 'Slatan', 'Cidane'];
    const [ categories, setCategories ] = useState( ['Maradona'] );


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr />
            
            <ol>
                {
                    categories.map( (category) => (
                        //<li key= { category }> { category } </li>
                        <GifGrid 
                            category = { category }
                            key = { category } 
                        />
                    ))
                }
            </ol>
        </> 
    )
};