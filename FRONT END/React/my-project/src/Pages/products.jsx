import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp. 100.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae nisi enim libero quas harum, ratione iure consectetur id voluptates.",
  },
  {
    id: 2,
    name: "Tas Trendy",
    price: "Rp. 150.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Tas trendi dengan desain modern yang cocok untuk segala kesempatan. Dibuat dari bahan berkualitas tinggi dan tahan lama.",
  },
  {
    id: 3,
    name: "Kacamata Fashion",
    price: "Rp. 50.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Kacamata fashion dengan gaya yang keren. Melindungi mata Anda dari sinar matahari dan membuat Anda tampil stylish.",
  },
];

const ProductPage = () => {
  return (
    <div className="flex justify-center pt-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
