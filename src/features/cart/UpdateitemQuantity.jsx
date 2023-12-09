import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increseItemQuantity } from "./cartSlice";

function UpdateitemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="rounded-md bg-stone-200 px-2 text-sm font-medium">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(increseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateitemQuantity;
