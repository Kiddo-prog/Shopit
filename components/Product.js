import Image from "next/image";

export default function Product({ name, price, image, description }) {
  const newDescription = description.replace("<p>", '').replace("</p>", '')
  return (
    <div className="bg-white">
      <Image
        src={image.url}
        alt={newDescription}
        className="w-full h-full object-center object-cover group-hover:opacity-75"
        width={500}
        height={500}
      />
      
      <div className="p-5">
        <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">{price.formatted_with_symbol}</p>
      </div>
    </div>
  )
}


