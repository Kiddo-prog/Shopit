export default function Product({ name, price, description }) {
    return (
        <div>
            <p>
                {name}: {price.formatted_with_symbol}
            </p>

            <p>{description}</p>
      </div>
    );
  }