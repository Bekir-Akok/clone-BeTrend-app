
const Product = (props) => {
    return(
            <a href="/category/product">
                <div className="product-main">
                    <div className="product-img">
                        <img src={props.src}></img>
                        <div className="fav">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                    <div className="product-text">
                        <h1>{props.name}</h1>
                        <div className="product-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <p>{props.stars}</p>
                        </div>
                        <h2>{props.price}</h2>
                    </div>
                </div>
            </a>
    )
}


export default Product