import CardProduct from "../components/Fragments/CardProduct";
import { useEffect, useState, useRef } from "react"; // Perhatikan perubahan ini

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 100000,
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae nisi enim libero quas harum, ratione iure consectetur id voluptates.",
  },
  {
    id: 2,
    name: "Tas Trendy",
    price: 150000,
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Tas trendi dengan desain modern yang cocok untuk segala kesempatan. Dibuat dari bahan berkualitas tinggi dan tahan lama.",
  },
  {
    id: 3,
    name: "Kacamata Fashion",
    price: 200000,
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Kacamata fashion dengan gaya yang keren. Melindungi mata Anda dari sinar matahari dan membuat Anda tampil stylish.",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  // Gunakan useState sebagai fungsi, bukan objek
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
   if(cart.length > 0) {
     const sum = cart.reduce((acc, item) => {
       const product = products.find((product) => product.id === item.id);
       return acc + product.price * item.qty;
     }, 0);
     setTotalPrice(sum);
     localStorage.setItem("cart", JSON.stringify(cart));
   }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const HandleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // UseRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // }

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if(cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);


  return (
    <>
      <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
        {email}
        <button
          className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-3 m-5 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center pt-5">
        <div className="w-4/6 flex flex-wrap ">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                hadleAddToCard={HandleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6 ">
          <h1 className="text-3xl font-bold text-blue-600 ml-3 mb-3">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quatity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}> 
                <td colSpan={3}>Total</td>
                <td>
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
