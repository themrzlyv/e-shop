import { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router';

const CreateProd = () => {

    const [form, setform] = useState({name: '' , description: '' , inStock: null , category: ''})
    const router = useRouter();

    const handlechange = e => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleadd = async () => {
        
        try {
            const res = await fetch('http://localhost:3000/api/product', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push("/");
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='container border d-flex flex-column p-4'>
            <div className='container border d-flex-flex-column'>
                <div
                className='border m-2'>
                    <h5 className='m-2 mx-5'>Product Name: </h5>
                    <input  className='m-2 mx-5 rounded w-75' onChange={handlechange} placeholder='name' name='name' type="text"/>
                    {form.name.length > 0 && form.name.length < 10 ? (<i className="far text-success fa-check-circle"></i>) : (<i className="far text-danger fa-times-circle"></i>)}
                </div>
                <div className='border m-2'>
                    <h5 className='m-2 mx-5'>Description: </h5>
                    <input  className='m-2 mx-5 rounded w-75' onChange={handlechange} placeholder='description' name='description' type="text"/>
                    {form.description.length > 0 && form.description.length < 20 ? (<i className="far text-success fa-check-circle"></i>) : (<i className="far text-danger fa-times-circle"></i>)}
                </div>
                <div className='border  m-2'>
                    <h5 className='m-2 mx-5'>How many in stock: </h5>
                    <input  className='m-2 mx-5 rounded w-75' onChange={handlechange} placeholder='inStock' name='inStock' type="number"/>
                </div>
                <div className='border m-2'>
                    <h5 className='mx-5 m-2'>Category Name:</h5>
                    <input  className='m-2 mx-5 rounded w-75' onChange={handlechange} placeholder='category' name='category' type="text"/>
                    {form.category.length > 0 && form.category.length < 15 ? (<i className="far text-success fa-check-circle"></i>) : (<i className="far text-danger fa-times-circle"></i>)}
                </div>
                <button className='btn btn-primary mx-5 m-2 px-5' onClick={handleadd}>Add Product</button>
            </div>
        </div>
    )
}


export default CreateProd;