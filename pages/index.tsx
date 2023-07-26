import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [sortedProducts, setSortedProducts] = useState<any[]>([]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetch("/api/products");
      setProducts(await products.json());
    };
    getProducts();
  }, []);

  useEffect(() => {
    setSortedProducts(products.sort((a, b) => a.id - b.id));
  }, [products]);

  return (
    <main className="min-h-screen p-12">
      <h1 className="mb-4">Demo Site</h1>
      {sortedProducts.map((product: any, index) => (
        <div key={index} className="border p-4 rounded-md border-black">
          <h2>{product.name}</h2>
          {!isMobile && <p>ID: {product.id}</p>}
          <p>${product.price}</p>
        </div>
      ))}
    </main>
  );
}
