import React from "react";

import "./ListView.css";

function BizCard(biz) {
  return (
    <div className="BizCard" onClick={(event) => handleListClick(event, biz.id)} name={biz.id}
         key={biz.id}>
      {biz.name}
    </div>
  )
}

function handleListClick(event, biz_id){
  const highlightedElems = document.querySelectorAll('.highlighted');
  highlightedElems.forEach(function (elem) {
    elem.classList.remove('highlighted');
  })
  document.querySelector('.ListView [name="' + biz_id + '"]').classList.add('highlighted');
  document.querySelector('.MapView [name="' + biz_id + '"]').classList.add('highlighted');
}

export default function ListView(props) {
  console.log('props', props)

  return (
    <div id="list-view" className="ListView">
      <h3>
        List of restaurants are:
      </h3>
      {
        props.biz.map(BizCard)
      }
      </div>
      );
}
