import { FastForward } from 'lucide-react';
import React, { useState } from 'react'

const Maingrid = () => {

  // For Green Divs
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

  const handeltooge7 = () => {
    setbigdiv(false)
    setbigdiv1(false)
    setbigdiv2(false)
    setbigdiv3(false)
    setbigdiv4(false)
    setbigdiv5(false)
    setbigdiv7(true)
  }

  // For Pink Divs
  const [pinkbigdiv1, setpinkbigdiv1] = useState(false)
  const [pinkbigdiv2, setpinkbigdiv2] = useState(false)
  const [pinkbigdiv3, setpinkbigdiv3] = useState(false)
  const [pinkbigdiv4, setpinkbigdiv4] = useState(false)
  const [pinkbigdiv5, setpinkbigdiv5] = useState(false)
  const [pinkbigdiv6, setpinkbigdiv6] = useState(false)
  const [pinkbigdiv7, setpinkbigdiv7] = useState(false)

  const handletoggle1 = () =>{
    setpinkbigdiv1(true)
    setpinkbigdiv2(false)
    setpinkbigdiv3(false)
    setpinkbigdiv4(false)
    setpinkbigdiv5(false)
    setpinkbigdiv6(false)
    setpinkbigdiv7(false)
  }

  const handletoggle2 = () => {
    setpinkbigdiv1(false)
    setpinkbigdiv2(true)
    setpinkbigdiv3(false)
    setpinkbigdiv4(false)
    setpinkbigdiv5(false)
    setpinkbigdiv6(false)
    setpinkbigdiv7(false)
  }

  const handletoggle3 = () =>{
    setpinkbigdiv1(false)
    setpinkbigdiv2(false)
    setpinkbigdiv3(true)
    setpinkbigdiv4(false)
    setpinkbigdiv5(false)
    setpinkbigdiv6(false)
    setpinkbigdiv7(false)
  }

  const handletoggle4 = () =>{
    setpinkbigdiv1(false)
    setpinkbigdiv2(false)
    setpinkbigdiv3(false)
    setpinkbigdiv4(true)
    setpinkbigdiv5(false)
    setpinkbigdiv6(false)
    setpinkbigdiv7(false)
  }

  const handletoggle5 = () =>{
    setpinkbigdiv1(false)
    setpinkbigdiv2(false)
    setpinkbigdiv3(false)
    setpinkbigdiv4(false)
    setpinkbigdiv5(true)
    setpinkbigdiv6(false)
    setpinkbigdiv7(false)
  }

  const handletoggle6 = () => {
    setpinkbigdiv1(false)
    setpinkbigdiv2(false)
    setpinkbigdiv3(false)
    setpinkbigdiv4(false)
    setpinkbigdiv5(false)
    setpinkbigdiv6(true)
    setpinkbigdiv7(false)
  }

  const handletoggle7 = () => {
    setpinkbigdiv1(false)
    setpinkbigdiv2(false)
    setpinkbigdiv3(false)
    setpinkbigdiv4(false)
    setpinkbigdiv5(false)
    setpinkbigdiv6(false)
    setpinkbigdiv7(true)
  }

  // For Purple Divs
  const [purplebigdiv1, setpurplebigdiv1] = useState(false)
  const [purplebigdiv2, setpurplebigdiv2] = useState(false)
  const [purplebigdiv3, setpurplebigdiv3] = useState(false)


  const handletogglepurple1 = () => {
    setpurplebigdiv1(true)
    setpurplebigdiv2(false)
    setpurplebigdiv3(false)
  }

  const handletogglepurple2 = () => {
    setpurplebigdiv1(false)
    setpurplebigdiv2(true)
    setpurplebigdiv3(false)
  }

  const handletogglepurple3 = () => {
    setpurplebigdiv1(false)
    setpurplebigdiv2(false)
    setpurplebigdiv3(true)
  }

  // For Yellow Div
  const [yellowbigdiv1, setyellowbigdiv1] = useState(false)
  const [yellowbigdiv2, setyellowbigdiv2] = useState(false)


  const handletoggleyellow1 = () => {
    setyellowbigdiv1(true)
    setyellowbigdiv2(false)
  }

  const handletoggleyellow2 = () => {
    setyellowbigdiv1(false)
    setyellowbigdiv2(true)
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
            <div className={`green ${bigdiv ? "" : "green-card"}`} onClick={handeltoogel}>
              <div className="read-per">
                <div className="percent">
                  91.6%
                </div>
                <p>Wells Fargo checking</p>
              </div>
            </div>
            <div className={`green ${bigdiv1 ? "" : "green-card"}`} onClick={handeltooge2}>
            <div className="read-per">
                <div className="percent">
                  66.6%
                </div>
                <p>Wells Fargo checking</p>
              </div>
            </div>
            <div className={`green ${bigdiv2 ? "" : "green-card"}`} onClick={handeltooge3}>
            <div className="read-per">
                <div className="percent">
                  50.6%
                </div>
                <p>Wells Fargo checking</p>
              </div>
            </div>
            <div className={`green ${bigdiv3 ? "" : "green-card"}`} onClick={handeltooge4}>
            <div className="read-per">
                <div className="percent">
                  11.6%
                </div>
                <p>Wells Fargo checking</p>
              </div>
            </div>
            <div className={`green ${bigdiv4 ? "" : "green-card"}`} onClick={handeltooge5}>
            <div className="read-per">
                <div className="percent">
                  21.6%
                </div>
                <p>Wells Fargo checking</p>
              </div>
            </div>
            <div className={`green ${bigdiv5 ? "" : "green-card"}`} onClick={handeltooge6}>
            <div className="read-per">
                <div className="percent">
                  13.6%
                </div>
                <p>Wells Fargo checking</p>
              </div>
            </div>
          </div>
          <div className="reading-pink">
            <div className={`pink ${pinkbigdiv1 ? "" : "pink-card"}`} onClick={handletoggle1}>
            <div className="read-per-pink">
                <div className="pink-percent">
                  88.6%
                </div>
                <p>Vanguard 401k 0000</p>
              </div>
            </div>
            <div className={`pink ${pinkbigdiv2 ? "" : "pink-card"}`} onClick={handletoggle2}>
            <div className="read-per-pink">
                <div className="pink-percent">
                  56.9%
                </div>
                <p>Vanguard 401k 0000</p>
              </div>
            </div>
            <div className={`pink ${pinkbigdiv3 ? "" : "pink-card"}`} onClick={handletoggle3}>
            <div className="read-per-pink">
                <div className="pink-percent">
                  34.0%
                </div>
                <p>Vanguard 401k 0000</p>
              </div>
            </div>
            <div className={`pink ${pinkbigdiv4 ? "" : "pink-card"}`} onClick={handletoggle4}>
            <div className="read-per-pink">
                <div className="pink-percent">
                  25.8%
                </div>
                <p>Vanguard 401k 0000</p>
              </div>
            </div>
            <div className={`pink ${pinkbigdiv5 ? "" : "pink-card"}`} onClick={handletoggle5}>
            <div className="read-per-pink">
                <div className="pink-percent">
                  20.1%
                </div>
                <p>Vanguard 401k 0000</p>
              </div>
            </div>
            <div className={`pink ${pinkbigdiv6 ? "" : "pink-card"}`} onClick={handletoggle6}>
            <div className="read-per-pink">
                <div className="pink-percent">
                  6.41%
                </div>
                <p>Vanguard 401k 0000</p>
              </div>
            </div>
            <div className={`pink ${pinkbigdiv7 ? "" : "pink-card"}`} onClick={handletoggle7}>
            <div className="read-per-pink">
                <div className="pink-percent">
                  4.10%
                </div>
                <p>Vanguard 401k 0000</p>
              </div>
            </div>
          </div>
          <div className="reading-purple">
            <div className={`purple ${purplebigdiv1 ? "" : "purple-card"}`} onClick={handletogglepurple1}>
            <div className="read-per-purple">
                <div className="purple-percent">
                  50.0%
                </div>
                <p>Strip Vested options</p>
              </div>
            </div>
            <div className={`purple ${purplebigdiv2 ? "" : "purple-card"}`} onClick={handletogglepurple2}>
            <div className="read-per-purple">
                <div className="purple-percent">
                  26.5%
                </div>
                <p>Strip Vested options</p>
              </div>
            </div>
            <div className={`purple ${purplebigdiv3 ? "" : "purple-card"}`} onClick={handletogglepurple3}>
            <div className="read-per-purple">
                <div className="purple-percent">
                  24.5%
                </div>
                <p>Strip Vested options</p>
              </div>
            </div>
          </div>
          <div className="reading-yellow">
            <div className={`yellow ${yellowbigdiv1 ? "" : "yellow-card"}`} onClick={handletoggleyellow1}>
            <div className="read-per-yellow">
                <div className="yellow-percent">
                  7.5%
                </div>
                <p>NYC Apartmen</p>
              </div>
            </div>
            <div className={`yellow ${yellowbigdiv2 ? "" : "yellow-card"}`} onClick={handletoggleyellow2}>
            <div className="read-per-yellow">
                <div className="yellow-percent">
                  12.0%
                </div>
                <p>SF House</p>
              </div>
            </div>
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