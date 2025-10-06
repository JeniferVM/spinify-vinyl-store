"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import productInterface from "../../interface/productInterface";
import { getProductById } from "../../Services/prod.serv";
import Image from "next/image";
import ProdMenu from "@/app/components/ProdMenu";
import AddButton from "@/app/components/AddButton";

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
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <ProdMenu />
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
              {/* 
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-sm text-gray-500">Stock: </span>
                  <span className="text-lg font-semibold text-gray-500">
                    {productData.stock}
                  </span>
                </div>
              </div> */}
              <div className="mt-30">
                <AddButton product={productData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="overflow-x-auto scrollbar-hide">
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
            Cambiar por categorias {productData.categoryId}
            <div
              key={`new-${productData.categoryId}`}
              className="flex-shrink-0 animate-fade-in"
            >
              <ProductCard product={productData} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
