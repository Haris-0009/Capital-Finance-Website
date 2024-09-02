import React, { useState } from 'react'

const Maingrid = () => {
  const [bigdiv, setbigdiv] = useState(false);
  const [bigdiv1, setbigdiv1] = useState(false);
  const [bigdiv2, setbigdiv2] = useState(false);
  const [bigdiv3, setbigdiv3] = useState(false);
  const [bigdiv4, setbigdiv4] = useState(false);
  const [bigdiv5, setbigdiv5] = useState(false);

  const handeltoogel = () => {
    setbigdiv(true)
    setbigdiv1(false)
    setbigdiv2(false)
    setbigdiv3(false)
    setbigdiv4(false)
    setbigdiv5(false)
  }

  const handeltooge2 = () => {
    setbigdiv(false)
    setbigdiv1(true)
    setbigdiv2(false)
    setbigdiv3(false)
    setbigdiv4(false)
    setbigdiv5(false)
  }


  const handeltooge3 = () => {
    setbigdiv(false)
    setbigdiv1(false)
    setbigdiv2(true)
    setbigdiv3(false)
    setbigdiv4(false)
    setbigdiv5(false)
  }


  const handeltooge4 = () => {
    setbigdiv(false)
    setbigdiv1(false)
    setbigdiv2(false)
    setbigdiv3(true)
    setbigdiv4(false)
    setbigdiv5(false)
  }

  const handeltooge5 = () => {
    setbigdiv(false)
    setbigdiv1(false)
    setbigdiv2(false)
    setbigdiv3(false)
    setbigdiv4(true)
    setbigdiv5(false)
  }


  const handeltooge6 = () => {
    setbigdiv(false)
    setbigdiv1(false)
    setbigdiv2(false)
    setbigdiv3(false)
    setbigdiv4(false)
    setbigdiv5(true)
  }




  return (
    <div className="Flex-Grid">
      <div className="Up">
        <div className="Up-head">
          <div className="Up-head-left">
            <p>Net Worth</p>
            <h1>$20.98M</h1>
          </div>
          <div className="Up-head-right">
            <select name="" id="">
              <option value="">Today</option>
              <option value="">Tomorrow</option>
              <option value="">Yesterday</option>
            </select>
            <div className="grid-btns">
              <button><img src="signal.png" alt="" /></button>
              <button><img src="chart (2).png" alt="" /></button>
              <button><img src="paragraph.png" alt="" /></button>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="reading-color">
          <div className="reading-green">
            <div className={`green ${bigdiv ? "" : "green-card"}`} onClick={handeltoogel}></div>
            <div className={`green ${bigdiv1 ? "" : "green-card"}`} onClick={handeltooge2}></div>
            <div className={`green ${bigdiv2 ? "" : "green-card"}`} onClick={handeltooge3}></div>
            <div className={`green ${bigdiv3 ? "" : "green-card"}`} onClick={handeltooge4}></div>
            <div className={`green ${bigdiv4 ? "" : "green-card"}`} onClick={handeltooge5}></div>
            <div className={`green ${bigdiv5 ? "" : "green-card"}`} onClick={handeltooge6}></div>
          </div>
          <div className="reading-pink">
            <div className="pink"></div>
            <div className="pink"></div>
            <div className="pink"></div>
            <div className="pink"></div>
            <div className="pink"></div>
            <div className="pink"></div>
            <div className="pink"></div>
          </div>
          <div className="reading-purple">
            <div className="purple"></div>
            <div className="purple"></div>
            <div className="purple"></div>
          </div>
          <div className="reading-yellow">
            <div className="yellow"></div>
            <div className="yellow"></div>

          </div>
        </div>
        <div className="reading-name">
          <p><span className="cash">&#9864;</span> Cash</p>
          <p><span className="public">&#9864;</span> Public Assets</p> 
          <p><span className="equity">&#9864;</span> Company Equity</p> 
          <p><span className="real">&#9864;</span> Real Estate</p> 
        </div>
      </div>
      <div className="Down">
        <div className="Down-head">
          <div className="Down-head-right"> 
            <div className="mode-btns">
              <button>Dark</button>
              <button>Light</button>
            </div>
          </div>
          <div className="Down-head-left">


          </div>

        </div>
      </div>
    </div>
  )
}

export default Maingrid