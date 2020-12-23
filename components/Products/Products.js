import Link from 'next/link'

const Products = ({filteredproducts , activcat}) => {
    return (
        <div className='container d-flex flex-column border text-dark'>
            <div className='m-2'>
                <h4>{activcat ? activcat : 'All Products'}</h4>
            </div>
            <div className='m-2 d-flex justify-content-between flex-wrap'>
                {filteredproducts.map(item => (
                    <div
                    key={item._id}
                    className="card m-2" 
                    style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Category: {item.category}</p>
                            <p className="card-text">inStock: {item.inStock}</p>
                            <Link href={`/${item._id}`}>
                                <button className='btn px-4 btn-outline-warning'>
                                    <i className="fas px-1 fs-5 fa-tag"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Products;