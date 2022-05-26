import React, { useState } from "react";
import UseParts from "../../Hooks/UseParts";
import Part from "../Part/Part";
import ParcessModal from "../ParcessModal/Parcess";

const Parts = () => {
  const { parts, setParts } = UseParts();
  const [selectedPart, setSelectedPart] = useState(null);
  return (
    <div className="my-10">
      <h3 className="text-xl  text-center my-12">
        All parts({parts.length})
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {parts.map((part) => (
          <Part
            key={part._id}
            part={part}
            setSelectedPart={setSelectedPart}
          ></Part>
        ))}
      </div>
      {selectedPart && <ParcessModal selectedPart={selectedPart} setSelectedPart={setSelectedPart} ></ParcessModal>}
    </div>
  );
};

export default Parts;
