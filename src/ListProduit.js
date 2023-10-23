import phones from "./Phones.js";
import Produit from "./Produit.js";
function ListProduit(){
    return (
        <div className="listProduit">
            {phones.map((p)=>(
                <Produit {...p}/>
            ))};
        </div>
    )
};
const btn = document.querySelectorAll('button')
const prod = document.getElementsByClassName('produit')
console.log(prod)
function remove (){
    return (
btn.forEach(e=>{
    document.removeChild(prod)
})
    )
}
export {remove} ;
export default ListProduit;