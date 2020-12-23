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
        <div className='container p-3 card bg-primary d-flex flex-column align-items-center'>
            <div className="card-body border bg-light">
                <h2 className="card-title p-2 text-center border">{product.name}</h2>
                <h4 className="card-text p-3 border text-secondary" >Category: {product.category}</h4>
                <h6 className="card-text p-2 text-secondary">Instock: {product.inStock}</h6>
                <p className="card-text p-2 text-secondary">More Details: {product.description}</p>
                <button onClick={addtocard} className="btn p-2 btn-outline-success">Add to Card</button>
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