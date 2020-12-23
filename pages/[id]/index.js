import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router';


const ShowProduct = ({product}) => {

    const router = useRouter();

    const addtocard = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/cardlist' , {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
            router.push("/cardlist");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container p-3 card d-flex flex-column align-items-center'>
            <div style={{backgroundColor: '#a3d2ca'}} className="card-body align-items-center border d-flex bg-light">
                <div className=' d-flex flex-column text-center p-2 m-2'>
                    <h2 className="card-title p-2 text-center border">{product.name}</h2>
                    <h4 className="card-text p-3 border text-secondary" >
                    <i className="fas mx-2 fs-4 fa-clipboard-list"></i>
                    {product.category}</h4>
                </div>
                <div className='border d-flex flex-column text-right p-4 m-2'>
                    <h6 className="card-text p-2 text-secondary">Instock: {product.inStock}</h6>
                    <p className="card-text p-2 text-secondary">More Details: {product.description}</p>
                    <button onClick={addtocard} className="btn p-2 btn-outline-success">Add to Card</button>
                </div>
            </div>
        </div>
    )
}


export default ShowProduct;

export const getServerSideProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/product/${id}`);
    const { data } = await res.json();
    return {
        props: { product: data}
    }
}