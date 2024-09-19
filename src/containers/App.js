
import ListView from "../components/ListView/ListView";
import MapView from "../components/MapView/MapView";
import "./App.css";
import React, {useEffect, useState} from "react";
import {STATUS, loadBiz} from "../controller";


var pastFetchLoc = {lat: null, lng: null};


function App() {
  const [biz, setBiz] = useState([]);
  const [bizLoadStatus, setBizLoadStatus] = useState(null);
  const [loc, setLoc] = useState({lat: 51.532281, lng: -0.1777111});
  const [dataList, setDataList] = useState([])

  function handleSearchChange(value){
    const filtered = biz.filter((item) =>
      item['name'].toLowerCase().includes(value.toLowerCase())
    )
    setDataList(filtered);
  }


  async function reloadBiz() {
    if (bizLoadStatus !== STATUS.IN_PROG &&
        !(pastFetchLoc.lat === loc.lat &&
          pastFetchLoc.lng === loc.lng)) {
      console.log("Loading data", loc, bizLoadStatus, pastFetchLoc);
      setBizLoadStatus(STATUS.IN_PROG);
      pastFetchLoc = loc;
      var res = await loadBiz(loc);
      console.log("Res", res);
      setBizLoadStatus(res.status);
      if (res.status === STATUS.SUCC) {
        setBiz(res.biz);
        setDataList(res.biz);
    }
    }
  };


  useEffect(() => {
    reloadBiz();
  });

  return (
    <div className="App">
    <ListView biz={dataList} />
      <MapView biz={dataList} loc={loc} setLoc={setLoc} onSearchChange={handleSearchChange}/>
    </div>
  );
}

export default App;
