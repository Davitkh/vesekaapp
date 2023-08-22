import { useSearchParams } from "react-router-dom";
export const Details = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name")); // 'name'
  return <div>Details</div>;
};
