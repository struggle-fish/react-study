import { CHANGE_LIST } from './constants';
const changeList = (list) => ({
  type: CHANGE_LIST,
  list
});


export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translationList')
      .then((res) => {
        if (Number(res.data.returncode) === 0) {
          const list = res.data.result.lists;
          dispatch(changeList(list));
        } else {
          const list = [];
          dispatch(changeList(list));
        }
      });
  }
};