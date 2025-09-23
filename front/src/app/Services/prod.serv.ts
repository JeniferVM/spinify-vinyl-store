// import productInterface from "../interface/productInterface";

// export const getAllProducts = async () => {
//   try {
//     const res = await fetch(`http://localhost:3000/products`, {
//       method: "GET",
//     });
//     const products: productInterface[] = await res.json();
//     return products;
//   } catch (error) {
//     console.error("Error in getAllProducts:", error);
//     throw new Error(
//       `Error al obtener productos: ${
//         error instanceof Error ? error.message : "Error desconocido"
//       }`
//     );
//   }
// };

// export const getProductById = async (idByParam: string) => {
//   try {
//     const allProducts = await getAllProducts();
//     const product = allProducts.find(
//       (product) => product.id.toString() === idByParam
//     );
//     if (!product) {
//       throw new Error("No product found");
//     }
//     return product;
//   } catch (error) {
//     console.error("Error in getProductById:", error);
//     throw error; // Re-lanzamos el error para que lo maneje el componente
//   }
// };
"use client";
import productInterface from "../interface/productInterface";

export const getAllProducts = async (): Promise<productInterface[]> => {
  try {
    console.log("🔄 Haciendo petición a:", `http://localhost:3000/products`);

    const res = await fetch(`http://localhost:3000/products`, {
      method: "GET",
    });

    console.log("📊 Status de la respuesta:", res.status);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const products: productInterface[] = await res.json();
    console.log("✅ Productos obtenidos:", products.length);
    console.log("📝 Primeros 3 productos:", products.slice(0, 3));

    return products;
  } catch (error) {
    console.error("❌ Error en getAllProducts:", error);
    throw new Error(
      `Error al obtener productos: ${
        error instanceof Error ? error.message : "Error desconocido"
      }`
    );
  }
};

export const getProductById = async (
  idByParam: string
): Promise<productInterface> => {
  try {
    console.log("🔍 Buscando producto con ID:", idByParam);

    const allProducts = await getAllProducts();

    console.log(
      "🔎 Todos los IDs disponibles:",
      allProducts.map((p) => p.id)
    );

    const product = allProducts.find(
      (product) => product.id.toString() === idByParam
    );

    if (!product) {
      console.error("❌ Producto no encontrado. ID buscado:", idByParam);
      console.error(
        "📋 IDs disponibles:",
        allProducts.map((p) => p.id)
      );
      throw new Error(`Producto con ID ${idByParam} no encontrado`);
    }

    console.log("✅ Producto encontrado:", product.name);
    return product;
  } catch (error) {
    console.error("❌ Error en getProductById:", error);
    throw error;
  }
};
