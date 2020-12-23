
import Link from 'next/link'



export default function navi() {
    return (
        <div className=''>
            <nav className="navbar container d-flex align-items-center border mb-2 ">
                <div className="mx-3">
                    <Link href={`/`}>
                        <a className="fs-3 text-light">E-Shop</a>
                    </Link>
                </div>
                <div className='d-flex align-items-center mx-3'>
                    <ul className=" d-flex m-0 p-0 align-items-center">
                        <Link href={`/createproducts`}>
                            <li class="mx-3 border px-4">
                                <a className="">
                                    <i class="fas text-light fa-plus"></i>
                                </a>
                            </li>
                        </Link>
                        <Link href={`/cardlist`}>
                            <li className="mx-3 border px-4">
                                <a class="">
                                    <i class="fas text-light fa-cart-arrow-down"></i>
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
