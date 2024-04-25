import { useState } from "react";

const Quantity = ({ onQuantityChange, id, Qty }) => {
  const [qty, setQty] = useState(Qty);

  const handleChangeQty = (value) => {
    if (value > 0) {
      onQuantityChange(id, value);
      setQty(value);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <button
        style={{
          border: "none",
          fontWeight: "bold",
          background: "none",
        }}
        onClick={() =>
          qty > 1 ? handleChangeQty(qty - 1) : handleChangeQty(1)
        }
      >
        -
      </button>
      <input
        class="form-control form-control-sm"
        style={{
          width: "50px",
          textAlign: "center",
        }}
        type="number"
        value={qty}
        onChange={(e) => handleChangeQty(e.target.value * 1)}
      />
      <button
        style={{
          border: "none",
          fontWeight: "bold",
          background: "none",
        }}
        onClick={() => handleChangeQty(qty + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
