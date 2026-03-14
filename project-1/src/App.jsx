import React, { useState } from 'react'
import Card from './Components/Card'
import ProductCard from './Components/ProductCard'
import AiCard from './Components/AiCard'
import MulCard from './Components/MulCard'


const App = () => {
  const [activeSection, setActiveSection] = useState('jobs')
//   const data = [
//   { "id": 1,
//     "photo": "https://i.pinimg.com/736x/43/d3/09/43d309d0c66fd9fd1e9fb2baa18b8708.jpg",
//     "juice_name": "Kiwi Juice",
//     "ingredients": ["Kiwi", "Milk", "Ice"],
//     "price": 12
//   },
//   { "id": 2,
//     "photo": "https://i.pinimg.com/736x/ae/26/44/ae2644aae725fda52fc93d4d1351ebc3.jpg",
//     "juice_name": "Orange Juice",
//     "ingredients": ["Orange", "Ice", "Sugar"],
//     "price": 10
//   },
//   { "id": 3,
//     "photo": "https://i.pinimg.com/1200x/8b/e9/87/8be9874ab94e7ffb3d97367382cd687f.jpg",
//     "juice_name": "Strawberry Juice",
//     "ingredients": ["Strawberry", "Milk", "Honey"],
//     "price": 14
//   },
//   { "id": 4,
//     "photo": "https://i.pinimg.com/736x/3a/2d/64/3a2d648b2afd69b7939e1fe5653bd0ee.jpg",
//     "juice_name": "Mango Juice",
//     "ingredients": ["Mango", "Ice", "Sugar"],
//     "price": 11
//   },
//   { "id": 5,
//     "photo": "https://i.pinimg.com/1200x/af/e3/78/afe378727130a4df11d421561d03aa86.jpg",
//     "juice_name": "Pineapple Juice",
//     "ingredients": ["Pineapple", "Ice", "Mint"],
//     "price": 13
//   },
//   { "id": 6,
//     "photo": "https://i.pinimg.com/1200x/e0/e4/b2/e0e4b240136422c9f0771f6f62abd2fc.jpg",
//     "juice_name": "Watermelon Juice",
//     "ingredients": ["Watermelon", "Ice", "Mint"],
//     "price": 9
//   },
//   { "id": 7,
//     "photo": "https://i.pinimg.com/1200x/68/21/96/682196eabce95c2292e600b2f2fbcbc6.jpg",
//     "juice_name": "Apple Juice",
//     "ingredients": ["Apple", "Ice", "Honey"],
//     "price": 10
//   },
//   { "id": 8,
//     "photo": "https://i.pinimg.com/736x/f3/ad/f9/f3adf983bf318348acc7480010ba4f40.jpg",
//     "juice_name": "Banana Shake",
//     "ingredients": ["Banana", "Milk", "Honey"],
//     "price": 12
//   },
//   { "id": 9,
//     "photo": "https://i.pinimg.com/736x/45/58/4f/45584fc3f3753fc8c74dbb4fc66452e7.jpg",
//     "juice_name": "Avocado Smoothie",
//     "ingredients": ["Avocado", "Milk", "Honey"],
//     "price": 15
//   },
//   { "id": 10,
//     "photo": "https://i.pinimg.com/1200x/40/23/39/402339b7da35eb9446b3bfff0bdcc8b8.jpg",
//     "juice_name": "Mixed Fruit Juice",
//     "ingredients": ["Apple", "Mango", "Orange"],
//     "price": 16
//   }
// ];
 const Product = [
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-nike-icon-svg-download-png-202653.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    "product_name": "Nike Air Zoom Pegasus",
    "price": "$120",
    "tagline": "Run faster, feel lighter",
    "details": "Lightweight running shoes with responsive cushioning and breathable mesh upper."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-adidas-icon-svg-download-png-2673953.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    "product_name": "Adidas Ultraboost",
    "price": "$180",
    "tagline": "Energy in every step",
    "details": "Premium running shoes with boost cushioning and flexible knit upper."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-puma-icon-svg-download-png-2673893.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80",
    "product_name": "Puma RS-X Sneakers",
    "price": "$110",
    "tagline": "Bold style meets comfort",
    "details": "Chunky sneakers with cushioned midsole and durable rubber outsole."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-new-icon-svg-download-png-282520.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    "product_name": "New Balance 574",
    "price": "$95",
    "tagline": "Classic comfort",
    "details": "Everyday sneakers with suede mesh upper and cushioned support."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-asics-icon-svg-download-png-282909.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=800&q=80",
    "product_name": "ASICS Gel-Kayano",
    "price": "$160",
    "tagline": "Stability for runners",
    "details": "High-performance running shoes with gel cushioning technology."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-reebok-icon-svg-download-png-282489.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    "product_name": "Reebok Nano X",
    "price": "$130",
    "tagline": "Train without limits",
    "details": "Durable training shoes designed for gym and cross training."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-under-icon-svg-download-png-282154.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&w=800&q=80",
    "product_name": "Under Armour HOVR",
    "price": "$150",
    "tagline": "Feel the energy return",
    "details": "Advanced running shoes with HOVR cushioning for smooth movement."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-vans-icon-svg-download-png-202702.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    "product_name": "Vans Old Skool",
    "price": "$70",
    "tagline": "Classic skate style",
    "details": "Iconic skate shoes with canvas upper and signature side stripe."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-converse-icon-svg-download-png-202557.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800&q=80",
    "product_name": "Converse Chuck Taylor",
    "price": "$65",
    "tagline": "Timeless sneaker icon",
    "details": "Classic canvas sneakers with rubber toe cap and vintage design."
  },
  {
    "company_logo": "https://cdn.iconscout.com/icon/free/png-512/free-converse-logo-icon-svg-download-png-2854234.png?f=webp&w=256",
    "product_photo": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    "product_name": "Skechers Go Walk",
    "price": "$85",
    "tagline": "Comfort in every step",
    "details": "Lightweight walking shoes with breathable mesh and cushioned sole."
  }
]
 
 const IceCreamProducts = [
   {
     image: "https://images.unsplash.com/photo-1563805042-7684c019e157?w=400&h=400&fit=crop",
     title: "Vanilla Ice Cream",
     tags: ["Vegan", "Gluten free", "Organic"],
     description: "Lorem ipsum dolor sit amet consectetur.",
     toppings: ["Choco chips", "Nuts"],
     price: 10.00,
     delivery: 2
   }
 ];

 return (
<>
  {/* Toggle Buttons */}
  <div className="flex gap-4 justify-center items-center p-6 bg-white sticky top-0 z-50 shadow-md">
    <button
      onClick={() => setActiveSection('jobs')}
      className={`px-6 py-2 rounded-lg font-semibold transition ${
        activeSection === 'jobs'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      Job Cards
    </button>
    <button
      onClick={() => setActiveSection('icecream')}
      className={`px-6 py-2 rounded-lg font-semibold transition ${
        activeSection === 'icecream'
          ? 'bg-orange-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      Ice Cream
    </button>
  </div>

  {/* Job Cards Section */}
  {activeSection === 'jobs' && <MulCard />}

  {/* Ice Cream Products Section */}
  {activeSection === 'icecream' && (
    <section className="flex items-center flex-wrap py-16 px-6 gap-10 justify-center bg-gradient-to-br from-yellow-50 via-white to-orange-50 min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200 opacity-20 rounded-full blur-3xl"></div>
      </div>
      {IceCreamProducts.map(function (product, index) {
        return <AiCard key={index} {...product} />;
      })}
    </section>
  )}
</>
  )
}

export default App