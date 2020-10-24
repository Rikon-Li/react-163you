import React from 'react'

export default function Cate({data}) {
  return (
    <div className="cate">
      {
        data.map(item=>(
          <div className="cate-item" key={item.id}>
            <img src={item.picUrl} alt=""/>
            <span>{item.text}</span>
          </div>
        ))
      }
    </div>
  )
}
