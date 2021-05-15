import { IconButton } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import "./QuantityPicker.scss";

function QuantityPicker({ maximum }: { maximum: number }) {
  const [value, setValue] = React.useState(0);

  const handleLessClick = () => {
    value > 0 ? setValue(value - 1) : setValue(value);
  };

  const handlePlusClick = () => {
    value < maximum ? setValue(value + 1) : setValue(value);
  };

  const handleChangeInput = (value: string) => {
    if (parseInt(value) > 0 && parseInt(value) < maximum) {
      setValue(parseInt(value));
    }
  };

  return (
    <div className="quantity-picker">
      <div className="quantity-picker__less case">
        <IconButton onClick={handleLessClick}>
          <Remove />
        </IconButton>
      </div>
      <div className="quantity-picker__input case">
        <input
          type="text"
          value={value}
          min={0}
          max={maximum}
          onChange={(e) => handleChangeInput(e.target.value)}
        />
      </div>
      <div className="quantity-picker__more case">
        <IconButton onClick={handlePlusClick}>
          <Add />
        </IconButton>
      </div>
    </div>
  );
}

export default QuantityPicker;
