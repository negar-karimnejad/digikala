import { useEffect, useState } from "react";

const Switch = ({ onChange, checked }) => {
  const [isOn, setIsOn] = useState(checked);

  useEffect(() => {
    setIsOn(checked);
  }, [checked]);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <div
      className={`w-10 h-5 relative inline-block cursor-pointer rounded-full transition-colors duration-300 ${
        isOn ? "bg-green-500" : "bg-gray-400"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-5 h-5 absolute top-0 transition-transform duration-300 bg-white border rounded-full shadow  ${
          isOn ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
    </div>
  );
};

export default Switch;
