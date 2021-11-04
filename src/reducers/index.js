import updatePeople from './people';

const reducer = (state, action) => {
	return {
		people: updatePeople(state, action),
	};
};

export default reducer;