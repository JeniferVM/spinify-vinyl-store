// export const createOrder = async (products: number[], token: string) => {
//   try {
//     const res = await fetch(`http://localhost:3000/orders`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "aplication/json",
//         Autorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ products }),
//     });

//     const orders = await res.json();
//     return orders;
//   } catch (error) {
//     throw new Error(
//       `Error al obtener productos: ${
//         error instanceof Error ? error.message : "Error desconocido"
//       }`
//     );
//   }
// };

// export default createOrder;

export const createOrder = async (products: number[], token: string) => {
  console.log("=== DEBUG createOrder ===");
  console.log("products:", products);
  console.log("token:", token);
  console.log("token type:", typeof token);
  console.log("token length:", token?.length);

  const requestBody = { products };
  console.log("Request body:", JSON.stringify(requestBody));

  try {
    const res = await fetch(`http://localhost:3000/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(requestBody),
    });

    const responseText = await res.text();

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${responseText}`);
    }

    return JSON.parse(responseText);
  } catch (error) {
    console.error("Error completo:", error);
    throw error;
  }
};
