export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 1
  },
  {
    item: 'Learn about hooks',
    completed: false,
    id: 2
  },
  {
    item: 'Learn about context',
    completed: false,
    id: 3
  }
]

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      let todo = {
        item: action.item,
        completed: false,
        id: new Date()
      }
      return [
        ...state,
        todo
      ]
    case 'TOGGLE_COMPLETED': 
      return state.map(item => {
        if (item.id === action.id) {
          return {...item, completed: !item.completed}
        } else {
          return item
        }
      })
    default:
      return state;
  }
};