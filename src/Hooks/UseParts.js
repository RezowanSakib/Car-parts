import { useEffect, useState } from "react";

const UseParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://pacific-anchorage-45522.herokuapp.com/product").then((res) =>
      res.json().then((data) => setParts(data))
    );
  }, []);
  return { parts, setParts };
};

export default UseParts;
