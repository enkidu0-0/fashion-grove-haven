
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  discount?: number;
}

export const tshirts: Product[] = [
  {
    id: "tshirt-1",
    name: "Classic Black T-shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
    isNew: true,
  },
  {
    id: "tshirt-2",
    name: "White Essential Tee",
    price: 799,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
    discount: 38,
  },
  {
    id: "tshirt-3",
    name: "Striped Cotton T-shirt",
    price: 899,
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
  },
  {
    id: "tshirt-4",
    name: "Graphic Print Tee",
    price: 949,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
    isNew: true,
  },
  {
    id: "tshirt-5",
    name: "Fitted Crew Neck",
    price: 849,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
    discount: 29,
  },
  {
    id: "tshirt-6",
    name: "Relaxed Fit T-shirt",
    price: 749,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
  },
  {
    id: "tshirt-7",
    name: "Premium Cotton Tee",
    price: 1099,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
  },
  {
    id: "tshirt-8",
    name: "Urban Style T-shirt",
    price: 999,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1627910463142-beec7f9a038d?w=400&auto=format&fit=crop&q=60",
    category: "tshirts",
    discount: 33,
  },
];

export const hoodies: Product[] = [
  {
    id: "hoodie-1",
    name: "Classic Pullover Hoodie",
    price: 1599,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
    isNew: true,
  },
  {
    id: "hoodie-2",
    name: "Zip-Up Sweatshirt",
    price: 1799,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
    discount: 28,
  },
  {
    id: "hoodie-3",
    name: "Oversized Comfort Hoodie",
    price: 1899,
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
  },
  {
    id: "hoodie-4",
    name: "Premium Winter Hoodie",
    price: 2099,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
    isNew: true,
  },
  {
    id: "hoodie-5",
    name: "Urban Street Hoodie",
    price: 1699,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
    discount: 29,
  },
  {
    id: "hoodie-6",
    name: "Essential Everyday Hoodie",
    price: 1499,
    image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
  },
  {
    id: "hoodie-7",
    name: "Fleece-Lined Hoodie",
    price: 2199,
    image: "https://images.unsplash.com/photo-1565693413579-8a73c477807a?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
  },
  {
    id: "hoodie-8",
    name: "Graphic Design Hoodie",
    price: 1999,
    originalPrice: 2599,
    image: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&auto=format&fit=crop&q=60",
    category: "hoodies",
    discount: 23,
  },
];

export const trending: Product[] = [
  ...tshirts.slice(0, 3),
  ...hoodies.slice(0, 3),
  {
    id: "trending-7",
    name: "Designer Denim Jeans",
    price: 2499,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=400&auto=format&fit=crop&q=60",
    category: "jeans",
    isNew: true,
  },
  {
    id: "trending-8",
    name: "Summer Floral Dress",
    price: 1899,
    originalPrice: 2699,
    image: "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?w=400&auto=format&fit=crop&q=60",
    category: "dresses",
    discount: 30,
  },
];
