import {api, http} from '../../../http'

// type
const SET_HOME_DATA = 'home/setHomeData';

// 初始state
const initialState = {
  banner: [],
  cate: [],
  newGoods: []
}

// 同步事件
const setHomeData = (data)=>({
  type: SET_HOME_DATA,
  ...data
})

// 异步事件
export const requestHomeData = () => async(dispatch) => {
    const data = await http.get(api.HOME_API);
    dispatch(setHomeData(data));
};


const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case SET_HOME_DATA:
      return {
        banner: action.bannerData,
        cate: action.cateData,
        newGoods: action.newGoodsData
      }
    default:
      return state;
  }
  
};

export default reducer;