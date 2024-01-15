/* eslint-disable no-undef */
import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState } from "react"; // Perhatikan perubahan ini
import { getProduct } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/layouts/Navbar";
// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 100000,
//     image: "/images/fashion-shoes-sneakers.jpg",
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae nisi enim libero quas harum, ratione iure consectetur id voluptates.",
//   },
//   {
//     id: 2,
//     name: "Tas Trendy",
//     price: 150000,
//     image: "/images/fashion-shoes-sneakers.jpg",
//     description:
//       "Tas trendi dengan desain modern yang cocok untuk segala kesempatan. Dibuat dari bahan berkualitas tinggi dan tahan lama.",
//   },
//   {
//     id: 3,
//     name: "Kacamata Fashion",
//     price: 200000,
//     image: "/images/fashion-shoes-sneakers.jpg",
//     description:
//       "Kacamata fashion dengan gaya yang keren. Melindungi mata Anda dari sinar matahari dan membuat Anda tampil stylish.",
//   },
// ];

const ProductPage = () => {
  // Gunakan useState sebagai fungsi, bukan objek
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

 

  // const HandleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // UseRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // }

  return (
    <>
    <Navbar/>
      <div className="flex justify-center pt-5">
        <div className="w-4/6 flex flex-wrap ">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  // hadleAddToCard={HandleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-3 mb-3">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
