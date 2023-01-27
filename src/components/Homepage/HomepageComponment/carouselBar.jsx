import { useState } from 'react';
import './itemBox.css'
import imgList from './imgList';



function CarouselBar(){
  const [list, setList] = useState([]);
  const [showIndex,setShowIndex]=useState(5);

  const handlePre=()=>{
    if(showIndex===0){

    }else{
      let temp=showIndex
      temp=temp-5
      if(temp<0){
        setShowIndex(0)
      }else{
        setShowIndex(temp)
      }
    }
   
  }

  const handleNext=()=>{

      let temp=showIndex
      temp=temp+5

      if(temp>imgList.length){
        setShowIndex(imgList.length)
      }else{
        setShowIndex(temp)
      }
  }

    return(<div className='warap'>
        <div className='carousel-large-box'>
            <div className="text-left">
                    <h2 className="box-title">Best Sellers in Kitchen & Dining</h2>
            </div>

            <div className="carousel-small-box">
            {imgList && imgList.map((item,index) => {
                console.log(showIndex)
            if(index>=showIndex){
              return <img src={item.url} height="200px" alt="img"></img>;
            }
            
          })}

            </div>


        </div>

        <div>
            <button onClick={()=>{handlePre()}}>←</button>
            <button onClick={()=>{handleNext()}}>→</button>
        </div>
        

    
    </div>)

}

export default CarouselBar