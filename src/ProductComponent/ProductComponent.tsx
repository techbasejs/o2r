import "./ProductComponent.css"
import ProductData from "./ProductData";

function ProductComponent(props: ProductData) {
    return <div data-testid="productTile" key={"product-" + props.id} id={props.id} className="productTile">
        <div className="productName">{props.name}</div>
        <div className="productDescription">{props.description}</div>
    </div>;
}

export default ProductComponent;
