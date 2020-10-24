const { Router } = require('express');
const axios = require('axios');
const url = require('url');

const router = new Router();

router.get('/home', async (req, res)=>{
  const [indexData] = await Promise.all([
    axios.get(
      'https://m.you.163.com/xhr/index.json?__timestamp='+new Date().getTime()
    )
  ]);

  // 轮播图数据
  const bannerData = indexData.data.data.data.focusList.map(item=>({
    id: item.id,
    picUrl: item.picUrl,
  }));
  // 分类数据
  const cateData = indexData.data.data.data.kingKongModule.kingKongList
  .filter((item, index)=>(index>0&&index<=8)).map(item=>{
    const {query: {categoryId}} = url.parse(item.schemeUrl, true);
    return {
      picUrl: item.picUrl,
      id: categoryId,
      text: item.text
    }
  });
  // 新品首发
  const newGoodsData = indexData.data.data.data.newItemList.map(item=>({
    id: item.id,
    name: item.name,
    picUrl: item.primaryPicUrl,
    retailPrice: item.retailPrice,
  }));
  res.json({bannerData, cateData, newGoodsData});
});

module.exports = router;