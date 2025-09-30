export const createOrder = async (products: number[], token: string) => {
  const requestBody = { products };

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
