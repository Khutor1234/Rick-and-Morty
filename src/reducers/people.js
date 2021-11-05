const updatePeople = (state , action) => {
    const {type, payload} = action;

    if (state === undefined) {
        return {
          data: [],
          page: 1,
          loading: true,
          error: null,
          filter: {
              characters: ['name', 'species','status', 'gender'],
              episodes: ['name', 'episode'],
              locations: ['name', 'type','dimension']
          },
          filteredItem: {
            field: "name",
            value: ""
        }
        };
    }

    switch(type){
        case 'LOADED':
            return {
                ...state.people,
                data: payload,
                loading: false,
                error: null,
            };
            
        case 'REQUESTED':
            return{
                ...state.people,
                data: [],
                loading: true,
                error: null,
            };

        case 'ERROR':
            return {
                ...state.people,
                data: [],
                loading: false,
                error: payload
            };

        case 'ITEM_SELECTED':
            return {
                ...state.people,
                selectedItem: payload
            }
        
        case 'PAGE_CHANGE':
            return {
                ...state.people,
                page: payload
            }

        case 'FILTER_CHANGE':
            return {
                ...state.people,
                page: 1,
                filteredItem: payload
            }
        
        default:
            return state.people
    } 
}

export default updatePeople ;