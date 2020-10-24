import React, {Suspense} from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Loading from './pages/common/Loading/Loading'
import routes from "./routes";
import {TabBar, TabItem} from './components/app-tab-bar'

const tabData = [
  {
    id: 1,
    name: "首页",
    path: "/home",
    icon: "https://i.52112.com/icon/jpg/256/20200731/86059/3741131.jpg",
    selectedIcon: "https://i.52112.com/icon/jpg/256/20200429/76313/3222021.jpg",
  },
  {
    id: 2,
    name: "分类",
    path: "/category",
    icon: "https://i.52112.com/icon/jpg/256/20200731/86059/3741131.jpg",
    selectedIcon: "https://i.52112.com/icon/jpg/256/20200429/76313/3222021.jpg",
  },
  {
    id: 3,
    name: "购物车",
    path: "/cart",
    icon: "https://i.52112.com/icon/jpg/256/20200731/86059/3741131.jpg",
    selectedIcon: "https://i.52112.com/icon/jpg/256/20200429/76313/3222021.jpg",
  },
  {
    id: 4,
    name: "我的",
    path: "/mine",
    icon: "https://i.52112.com/icon/jpg/256/20200731/86059/3741131.jpg",
    selectedIcon: "https://i.52112.com/icon/jpg/256/20200429/76313/3222021.jpg",
  },
];

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>

      {/* 根页面 */}
      {renderRoutes(routes)}

      {/* 底栏 */}
      <TabBar>
        {tabData.map((item) => (
          <TabItem key={item.id} {...item}/>
        ))}
      </TabBar>

      </Suspense>
    </Router>
  );
}
