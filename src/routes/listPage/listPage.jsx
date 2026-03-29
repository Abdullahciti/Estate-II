
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

function ListPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("properties").select("*");

      if (error) {
        console.log(error);
      } else {
        setProperties(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {properties.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <img src={item.image_url} width="200" />
        </div>
      ))}
    </div>
  );
}
export default ListPage;
