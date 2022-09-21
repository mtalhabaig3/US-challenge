import {
  ALL_POSTS_CHANGE,
  TITLE_CHANGE,
  DESCRIPTION_CHANGE,
} from "../constants";

export function changePosts(posts) {
  return {
    type: ALL_POSTS_CHANGE,
    payload: posts,
  };
}

export function changeTitle(title) {
  return {
    type: TITLE_CHANGE,
    payload: title,
  };
}

export function changeDescription(description) {
  return {
    type: DESCRIPTION_CHANGE,
    payload: description,
  };
}
