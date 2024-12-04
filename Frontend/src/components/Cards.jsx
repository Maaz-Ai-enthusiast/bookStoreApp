

// eslint-disable-next-line react/prop-types
const Cards = ({ imageSrc, title, subtitle, price, tag, tagColor }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border relative">
      {/* Card Image */}
      <div className="relative p-6 bg-purple-100">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover" // This makes the image fill the container
        />
      </div>

      {/* Card Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <span className="text-sm text-gray-600">{subtitle}</span>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-800">${price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-md">
            Buy Now
          </button>
        </div>
      </div>

      {/* Tag */}
      {tag && (
        <div className="absolute top-2 right-2">
          <span
            className={`text-white text-xs font-bold py-1 px-3 rounded-full`}
            style={{ backgroundColor: tagColor || "#000" }}
          >
            {tag}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cards;
