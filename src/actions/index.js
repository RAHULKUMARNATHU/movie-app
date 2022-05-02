// {
//     type : 'ADD_MOVIES' ,
//     movies =  [m1,m2,m3]
// }

// action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';


// action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}


export function addFavourite(movie){
    return{
        type:ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFromFavourite(movie){
    return{
        type: REMOVE_FROM_FAVOURITE,
        movie
    };
}