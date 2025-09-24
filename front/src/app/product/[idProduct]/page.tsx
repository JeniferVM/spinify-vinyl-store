"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import productInterface from "../../interface/productInterface";
import { getProductById } from "../../Services/prod.serv";
import Image from "next/image";
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

export default function ProductDetail() {
  const params = useParams();
  const [productData, setProductData] = useState<productInterface | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(params.idProduct as string);
      setProductData(product);
    };
    fetchProduct();
  }, [params.idProduct]);

  if (!productData) {
    return (
      <div className="p-8">
        <h1>Cargando producto...</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-around items-center px-6 mt-20 mb-9">
        <Link
          href="products"
          className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/20 backdrop-blur-sm border border-custume-orange/30 hover:border-custume-orange/60 transition-all duration-300 hover:scale-105 hover:bg-custume-orange/10"
        >
          <div className="relative">
            <Image
              src="/assets/ShortLogo.png"
              alt="ShortLogo"
              width={25}
              height={25}
              className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
            />
            <div className="absolute inset-0 bg-custume-orange/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <span className="text-2xl text-custume-orange group-hover:text-orange-400 font-medium transition-colors duration-300">
            all products
          </span>
        </Link>
      </div>
      <div className="relative w-3/4 mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
      </div>
      <div className="m-20 p-6 h-auto">
        <div className="rounded-lg shadow-lg">
          <div className="md:flex justify-around">
            <div className=" group w-auto h-120 bg-black/30 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-black/40 border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl p-6">
              <Image
                src={productData.image}
                alt={productData.name}
                width={96}
                height={96}
                className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>

            <div className="md:w-1/2 group w-auto h-120 bg-black/30 backdrop-blur-sm rounded-2xl p-6">
              <h1 className="text-3xl font-bold text-custume-light mb-2">
                {productData.name}
              </h1>

              <p className="text-2xl text-custume-orange mb-4">
                By: <span className="font-semibold">{productData.author}</span>
              </p>

              <div className="mb-6">
                <span className="text-2xl font-bold text-custume-light">
                  ${productData.price}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-custume-light leading-relaxed">
                  {productData.description}
                </p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-sm text-gray-500">Stock: </span>
                  <span className="text-lg font-semibold text-gray-500">
                    {productData.stock}
                  </span>
                </div>
              </div>

              <button className="w-full bg-custume-orange hover:bg-orange-500 text-white font-medium py-3.5 px-4 rounded-xl transition-all duration-300 hover:scale-[0.98] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-custume-orange/50 focus:ring-offset-2 focus:ring-offset-black/20 active:scale-95 group-hover:bg-gradient-to-r group-hover:from-custume-orange group-hover:to-orange-500">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex">
          <div className="sticky right-0 z-20 bg-gradient-to-l from-black via-black/95 to-black/80 backdrop-blur-sm flex items-center min-w-fit border-l border-white/10">
            <div className="px-20 py-8 relative" style={{ direction: "ltr" }}>
              <h3 className="text-4xl font-bold text-white text-center leading-tight">
                <span className="text-custume-orange">Find</span> <br />
                more
              </h3>

              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-custume-orange to-transparent"></div>
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-custume-orange rounded-full shadow-lg shadow-custume-orange/50"></div>
            </div>
          </div>
          <div
            className="flex gap-8 pb-6 pl-8 pr-8"
            style={{ width: "max-content" }}
          >
            {/* Cambiar por categorias {productData.categoryId} */}
            <div
              key={`new-${productData.name}`}
              className="flex-shrink-0 animate-fade-in"
            >
              <ProductCard product={productData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
