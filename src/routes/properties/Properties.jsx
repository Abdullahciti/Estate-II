import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import "./properties.scss";
import Card from "../../components/card/Card";

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
    <div className="properties">
      {properties.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
export default ListPage;
