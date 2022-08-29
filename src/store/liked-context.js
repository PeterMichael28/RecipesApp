import { createContext, useState } from "react";

const LikedContext = createContext({
    liked: [],
    total: 0,
    add: (recipe) => {

    },
    remove: (id) => {

    },
    is: (id) => {
        
    }
})

export function LikedContextProvider(props) {
    const [fav, setFav] = useState([])

    const addLiked = (recipe) => {
        setFav((pre) => {
         return pre.concat(recipe)
        })
    }
    const removeLiked = (id) => {
        setFav((pre) => {
          return pre.filter(recipe => recipe.id !== id)
          })
    }
    const isLiked = (recipeId) => {
        return fav.some(recipe => recipe.id === recipeId)
    }

    const context = {
        liked: fav,
        total: fav.length,
        add: addLiked,
        remove: removeLiked,
        is: isLiked
    };

    return <LikedContext.Provider value={context}>
        {props.children}
    </LikedContext.Provider>
}

export default LikedContext;