import  { useEffect, useState } from "react";

const UseParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product").then((res) =>
      res.json().then((data) => setParts(data))
    );
  }, []);
  return {  parts, setParts};
};

export default UseParts;
