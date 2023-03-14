import './Products.scss';
import React, {useState} from "react";
import snicker1 from '../../assets/images/Snicker1.jpg';
import snicker2 from '../../assets/images/Snicker2.jpg';
import snicker3 from '../../assets/images/Snicker3.jpg';
import snicker4 from '../../assets/images/Snicker4.jpg';
import Lightbox from 'react-image-lightbox';

const images = [
    snicker1,
    snicker2,
    snicker3,
    snicker4,
  ];

const Product =()=> {

    const [currenUpImg, setcurrenUpImg]=useState(snicker1);
    const [isOpen,setisOpen]=useState(false);
    const [photoIndex,setphotoIndex]=useState(0);
    const handleClickPreviewImg = ()=>{
        let index = images.findIndex(item=>item===currenUpImg);
        setphotoIndex(index);
        setisOpen(true);
    }
    
    return(
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className='img-up'>
                        <img src={currenUpImg} onClick={()=>handleClickPreviewImg()}/>
                    </div>
                    <div className='img-down'>
                        <div className='img-small'>
                            <img src={snicker1} onClick={()=>setcurrenUpImg(snicker1)} className={currenUpImg===snicker1?'select':''}/>
                            </div>
                        <div className='img-small'>
                            <img src={snicker2} onClick={()=>setcurrenUpImg(snicker2)}className={currenUpImg===snicker2?'select':''}/>
                            </div>
                        <div className='img-small'>
                            <img src={snicker3} onClick={()=>setcurrenUpImg(snicker3)}className={currenUpImg===snicker3?'select':''}/>
                            </div>
                        <div className='img-small'>
                            <img src={snicker4} onClick={()=>setcurrenUpImg(snicker4)}className={currenUpImg===snicker4?'select':''}/>
                            </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className='Title'>Giày chạy bộ nam New Balance Cushioning - MARISMN3</div>
                    <div className='Price'>948.000 ₫</div>
                    <div className='Size'>Size</div>
                    <div className='Action'>
                        <label className='quantity'>Số lượng</label>
                        <input type='number' min={1} value={1} />
                        <button className='buy'> chọn mua </button>
                    </div>
                </div>
            </div>
            {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                onCloseRequest={() => setisOpen(false)}

                onMovePrevRequest={() =>
                    setphotoIndex( (photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setphotoIndex((photoIndex + 1) % images.length)
                }
                animationDisabled={true}
            />
        )}
        </div>
    )
}

export default Product;