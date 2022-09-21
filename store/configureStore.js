import { createStore, combineReducers } from "redux";
import {
  postReducer,
  titleReducer,
  descriptionReducer,
} from "../reducers/postReducer";
const rootReducer = combineReducers(
  { posts: postReducer },
  { title: titleReducer },
  { description: descriptionReducer }
);
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
