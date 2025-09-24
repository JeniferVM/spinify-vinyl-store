import productInterface from "../interface/productInterface";

export const getAllProducts = async (): Promise<productInterface[]> => {
  try {
    const res = await fetch(`http://localhost:3000/products`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const products: productInterface[] = await res.json();

    return products;
  } catch (error) {
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
    const allProducts = await getAllProducts();

    const product = allProducts.find(
      (product) => product.id.toString() === idByParam
    );

    if (!product) {
      throw new Error(`Producto con ID ${idByParam} no encontrado`);
    }
    return product;
  } catch (error) {
    throw error;
  }
};
