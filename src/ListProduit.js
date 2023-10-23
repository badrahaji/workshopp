import phones from "./Phones.js";
import Produit from "./Produit.js";

function removeProduct(product) {
    console.log('ttttt', product);
    var el = document.getElementById('listProduitId');
    console.log(el);
    el.removeChild(product);
}

function ListProduit() {
    return (
        <div className="listProduit" id="listProduitId">
            {phones.map((p, index) => (
                <Produit
                    key={index}
                    {...p}
                    onRemove={() => {
                        removeProduct(document.getElementById(p.id));
                    }}
                />
            ))}
        </div>
    );
}

export default ListProduit;
