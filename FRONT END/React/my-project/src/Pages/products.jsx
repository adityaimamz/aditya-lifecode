import CardProduct from "../components/Fragments/CardProduct";
const ProductPage = () => {
  return (
    <div className="flex justify-center pt-5">
      <CardProduct>
        <CardProduct.Header image="/images/fashion-shoes-sneakers.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          molestiae nisi enim libero quas harum, ratione iure consectetur id
          voluptates.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 100.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/fashion-shoes-sneakers.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          molestiae nisi enim libero quas harum, ratione iure consectetur id
          voluptates.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 100.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};



export default ProductPage;
