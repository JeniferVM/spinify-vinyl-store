interface ProdProps {
  params: Promise<{ idProduct: string }>;
}

export default async function ProductDetail({ params }: ProdProps) {
  const { idProduct } = await params;

  return (
    <div>
      <h1>Este es el id: {idProduct}</h1>
    </div>
  );
}
