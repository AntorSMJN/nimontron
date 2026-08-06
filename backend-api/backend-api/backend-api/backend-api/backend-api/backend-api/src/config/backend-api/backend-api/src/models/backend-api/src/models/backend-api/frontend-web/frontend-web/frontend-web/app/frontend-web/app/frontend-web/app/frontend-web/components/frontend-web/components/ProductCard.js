export default function ProductCard({ product }) {


return (

<div className="product-card">


<div className="product-image">

<img

src={
product.image ||
"/placeholder.png"
}

alt={product.name}

/>

</div>



<h3>

{product.name}

</h3>



<p>

Category:

{product.category || "Nimontron"}

</p>



<p>

৳ {product.price}

</p>



<p>

Stock:

{product.stock}

</p>



<button>

Add to Cart

</button>



</div>

);


}
