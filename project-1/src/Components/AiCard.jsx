import React, { useState } from 'react'
import { ShoppingCart, Star, Zap } from 'lucide-react'

const AiCard = ({ image, title, tags, description, toppings, price, delivery }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div 
      className="relative bg-white rounded-3xl overflow-hidden max-w-sm mx-auto transition-all duration-500 ease-out"
      style={{
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(251, 191, 36, 0.3)'
          : '0 10px 30px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Badge */}
      <div className="absolute top-4 right-4 z-10 bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
        <Zap size={14} /> Premium
      </div>

      {/* Image Container with Overlay */}
      <div className="relative bg-linear-to-b from-yellow-300 to-yellow-200 h-96 w-full overflow-hidden">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title} 
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              onError={(e) => e.target.src = 'https://laurenslatest.com/wp-content/uploads/2020/08/vanilla-ice-cream-5-copy.jpg'}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
          </>
        ) : (
          <div className="text-gray-500 text-center flex items-center justify-center h-full">No image available</div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 bg-white">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-600 ml-2">(4.8) 128 reviews</span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-semibold text-yellow-700 bg-yellow-100 px-3 py-1.5 rounded-full hover:bg-yellow-200 transition-colors"
            >
              ✓ {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
          {description}
        </p>

        {/* Toppings */}
        <div className="mb-6 bg-gray-50 p-4 rounded-2xl">
          <p className="text-gray-900 font-bold text-sm mb-3">🎂 Toppings</p>
          <div className="flex gap-2 flex-wrap">
            {toppings.map((topping, index) => (
              <span 
                key={index}
                className="px-3 py-2 bg-white text-gray-900 rounded-full text-xs font-bold border-2 border-yellow-300 hover:border-yellow-500 transition-colors shadow-sm"
              >
                {topping}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>

        {/* Price and Action */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-gray-600 text-xs font-semibold mb-1">PRICE</p>
            <p className="text-4xl font-black text-yellow-500">${price.toFixed(2)}</p>
            <p className="text-xs text-gray-500 font-semibold mt-1">+${delivery} delivery</p>
          </div>
          
          <button 
            onClick={handleAddCart}
            className={`font-bold py-3 px-6 rounded-2xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:from-yellow-500 hover:to-yellow-600'
            }`}
          >
            <ShoppingCart size={20} />
            <span>{isAdded ? 'Added!' : 'Order'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AiCard
