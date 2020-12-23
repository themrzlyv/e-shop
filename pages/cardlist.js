import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

const Cardlist = ({data}) => {
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            deletetoCard();
        }
    }, [isDeleting])

    const deletetoCard = async (id) => {

        setIsDeleting(true);

        try {
            
            const deleted = await fetch(`http://localhost:3000/api/cardlist/${id}`, {
                method: "Delete"
            });


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container border d-flex align-items-center flex-column'>
            <h4 className='border bg-success rounded container text-center m-2 p-2'>
                <i className="fab text-light fs-1 fa-shopify"></i>
            </h4>
            <div className='container border m-2 d-flex flex-wrap'>
                {data.map(item => (
                    <div className='w-25 border  p-2 m-2 rounded' key={item._id}>
                        <h4 className='m-3'>{item.name}</h4>
                        <h5 className='m-2'>
                        <i className="fas mx-2 fs-4 fa-clipboard-list"></i>
                         {item.category}</h5>
                        <p className='m-3'> {item.description}</p>
                        <p className='m-3'>Instock: {item.inStock}</p>
                        <button onClick={() => deletetoCard(item._id)} className='btn m-3 btn-outline-danger'>Delete List</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Cardlist;


export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/cardlist')
    const { data } = await res.json()
    return {
        props: { data }
    }
}