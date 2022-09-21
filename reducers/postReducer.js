import { ALL_POSTS_CHANGE } from "../constants";
import { TITLE_CHANGE } from "../constants";
import { DESCRIPTION_CHANGE } from "../constants";

const postsInitialState = {
  posts: [],
};
const postReducer = (state = postsinitialState, action) => {
  switch (action.type) {
    case ALL_POSTS_CHANGE:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

const titleInitialState = {
  title: "",
};
const titleReducer = (state = titleInitialState, action) => {
  switch (action.type) {
    case TITLE_CHANGE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

const descriptionInitialState = {
  description: "",
};
const descriptionReducer = (state = descriptionInitialState, action) => {
  switch (action.type) {
    case DESCRIPTION_CHANGE:
      return {
        ...state,
        description: action.payload,
      };
    default:
      return state;
  }
};
export { countReducer, titleReducer, descriptionReducer };
