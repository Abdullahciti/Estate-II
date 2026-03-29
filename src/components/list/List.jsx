import "./list.scss";
import Card from "../card/Card";
import CardSkeleton from "../skeleton/CardSkeleton"; // هنعمله حالاً
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../lib/supabase";

function List() {
  // استخدام React Query بدل useEffect بيوفر Caching تلقائي
  const { data: properties, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  });

  if (error) return <div className="error">حدث خطأ أثناء تحميل البيانات</div>;

  return (
    <div className="list">
      {isLoading
        ? // عرض 4 كروت "شبح" أثناء التحميل
          Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)
        : properties?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
    </div>
  );
}

export default List;