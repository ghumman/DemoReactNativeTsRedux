const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
	profile:[], 
	test: "test value"
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
		case 'UPDATE': 
      return {
				...state,
				profile: action.profile
			}

    default:
      return state
  }
};

export default profileReducer; 
