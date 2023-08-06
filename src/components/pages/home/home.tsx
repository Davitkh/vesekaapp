import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <div>
      <div>Home</div>
    </div>
  );
};
