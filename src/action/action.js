import { ADD_DATA, DELETE_DATA } from "../constant/actionType";

export const addData = (values) => (dispatch) => {
  try {
    dispatch({
      type: ADD_DATA,
      payload: values,
    });
  } catch (error) {}
};
export const deleteData = (email) => (dispatch) => {
  try {
    dispatch({
      type: DELETE_DATA,
      payload: email,
    });
  } catch (error) {}
};
