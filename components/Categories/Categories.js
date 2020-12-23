


const Categories = ({category , currentCategory , activcat}) => {
    const uniqcategory = [...new Set(category.map(item => item.category))];
    return (
        <div className='container border text-dark'>
            <h5 className='h5 m-2 border p-2'>Category</h5>
            <ul className='list-group m-2'>
                {uniqcategory.map(item => (
                    <li 
                    onClick={() => currentCategory(item)} 
                    key={item} 
                    className={activcat === item ? 'active list-group-item' : 'list-group-item'}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Categories;