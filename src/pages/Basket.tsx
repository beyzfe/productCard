import { Button } from "antd";
import { useCartStore } from "../store/useCartStore";

export default function Basket() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Sepetim</h2>
      {cartItems.length === 0 ? (
        <div className="text-gray-500">Sepetiniz boş</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div>
              <div
                key={item.id}
                className="flex items-center gap-4 border p-4 rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex-1">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-gray-600">${item.price}</div>
                </div>
                <div>
                  <Button onClick={() => removeFromCart(item.id)}>Sil</Button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-gray-500 flex justify-between ">
            <div>{cartItems.length} ürün var</div>
            <div>
              Ödenecek toplam tutar: $
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
