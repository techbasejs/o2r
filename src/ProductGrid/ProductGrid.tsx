import ProductComponent from "../ProductComponent/ProductComponent";
import ProductData from "../ProductComponent/ProductData"
import "./ProductGrid.css"

type ProductGridProps = {
    products: ProductData[]
}

function ProductGrid({products}: ProductGridProps) {
    return <div className="productGrid">{products.map((p => <section key={"product-"+p.id}><ProductComponent name={p.name} description={p.description} id={p.id}/></section>))}</div>;
}

export default ProductGrid;
