import React, {useState} from "react";
import ReactDOM from 'react-dom';

const AddNewProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState('');

    const ClickBtn= () => {
        let ojc = {
            name, price, size, color
        };
        
        let productlist = localStorage.getItem('productlist');   
        if(productlist){
            let arr=JSON.parse(productlist);
            arr.push((ojc));
            localStorage.setItem('productlist',JSON.stringify(arr));
        }else{
            localStorage.setItem('productlist',JSON.stringify([ojc]));
        }
        setName('');
        setPrice(0);
        setSize(0);
        setColor('');
        
    }

    const [ShowDetails,SetShowDetails]= useState(true)

    const HandleHideShow = () => {
        SetShowDetails(!ShowDetails)
    }

    

    return (
            <div>
            {
                ShowDetails === true &&
                <fieldset>
                    <legend> Add A New Product</legend>
                    <div className="input-product">
                        <label>Name:</label>
                        <input value={name} type="text" onChange={(event)=>setName(event.target.value)}/>
                    </div>
                    <div className="input-product">
                        <label>Price:</label>
                        <input value={price} type="text" onChange={(event)=>setPrice(event.target.value)}/>
                    </div>
                    <div className="input-product">
                        <label>Size:</label>
                        <input value={size} type="text"onChange={(event)=>setSize(event.target.value)}/>
                    </div>
                    <div className="input-product">
                        <label>Color:</label>
                        <input value={color} type="text"onChange={(event)=>setColor(event.target.value)}/>
                    </div>
                    <div>
                        <button onClick={() => ClickBtn()}>AddNewProduct</button>
                    </div>
                </fieldset>
            }
            {/* {
                ShowDetails === true && <div onClick={() => {HandleHideShow()}}>Hide</div>
            }

            {
                ShowDetails === false && <div onClick={() => {HandleHideShow()}}>Show</div>
            } */}

            {
                ShowDetails === true ?
                <div onClick={() => {HandleHideShow()}}>Hide</div>
                :<div onClick={() => {HandleHideShow()}}>Show</div>
            }

                <div>
                    List product:
                    <div>
                        {localStorage.getItem('productlist')}
                    </div>
                </div>
        </div>
    )
}

export default AddNewProduct;