import React, { Component } from "react";
import { connect } from "react-redux";
import { requestHomeData } from "./reducer";
import Banner from "./children/banner";
import Cate from "./children/cate";
import NewGoods from "./children/new-goods";

import Swiper from "swiper/swiper-bundle"
import "swiper/swiper-bundle.css"
import "./style.scss"


class Root extends Component {
  bannerRef = React.createRef();

  render() {
    const { banner, cate, newGoods } = this.props;
    return (
      <div className="page" id="home-root">
        <Banner data={banner} ref={this.bannerRef} />
        <Cate data={cate} />
        <NewGoods data={newGoods} />
      </div>
    );
  }
  componentDidMount() {
    // 请求数据
    this.props.requestData();
  }
  componentDidUpdate(oldProps, oldState){
    if(oldProps.banner !== this.props.banner){
      //轮播图数据有更新
      // 构建轮播图的dom结构
      new Swiper(this.bannerRef.current, {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}

export default connect(
  (state) => ({
    banner: state.home.banner,
    cate: state.home.cate,
    newGoods: state.home.newGoods,
  }),
  (dispatch) => ({
    requestData() {
      dispatch(requestHomeData());
    },
  })
)(Root);
