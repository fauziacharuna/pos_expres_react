import {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const EditProduct = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const history = useNavigate();
    const {id} = useParams();

    const editProduct = async (e) => {
        e.preventDefault();
        console.log(id);
        await axios.put(`http://localhost:4040/item/${id}`, {
            item_name: itemName,
            item_price: itemPrice
        });
        history('/')
    }
    useEffect(() => {
        getProductById();
    }, []);
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:4040/item/${id}`);
        setItemName(response.data.data.item_name);
        setItemPrice(response.data.data.item_price);
    }
    return (
        <div>
            <form onSubmit={editProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <input className="input" type="text" placeholder="title" name="item_name"
                           value={itemName} onChange={(e) => setItemName(e.target.value)}/>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input className="input" type="text" placeholder="price" name="item_price"
                           value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}/>
                </div>
                <div className="field">
                    <button className="button is-primary">Edit</button>
                </div>

            </form>
        </div>
    )
}
export default EditProduct;