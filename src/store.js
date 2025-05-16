export const initialStore=()=>{
  return{
    character:[],
    planets:[],
    vehicles:[],
    favorites:[],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    // case 'add_task':

    //   const { id,  color } = action.payload

    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };    

    case "set_personajes":
      const{personaje}=action.payload
      return{
        ...store, character:personaje
      }
    case "set_planetas":
      const{planetas}=action.payload
      return{
        ...store, planets:planetas
      }
      case "set_vehicles":
        const{vehiculos}=action.payload
      return{
        ...store, vehicles:vehiculos
      }
      case "newFavorite":
      const addFavorite = action.payload;
      if (store.favorites.includes(addFavorite)) {
        return store;
      } 
      return {
        ...store,
        favorites: [...store.favorites, addFavorite]
      };

    case "removeFavorite":
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav !== action.payload)
      };


    default:
      throw Error('Unknown action.');
  }    
}
