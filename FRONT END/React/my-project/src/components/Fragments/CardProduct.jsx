/* eslint-disable react/prop-types */
const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between mb-5 ml-1">
      {children})
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white line-clamp-1 ">
          {title}
        </h5>
        <p className="text-white line-clamp-3">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, hadleAddToCard, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-3 ">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={() => hadleAddToCard(id)}>
        Add to Cart
      </button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
