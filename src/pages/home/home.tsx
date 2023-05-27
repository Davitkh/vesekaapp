import { useEffect } from "react";
import { AppTitles } from "../../enums/app_titles";
import { useQuery, gql } from "@apollo/client";

export const Home = () => {
  useEffect(() => {
    document.title = AppTitles.Main;
  }, []);
  const FEED_QUERY = gql`
    {
      feed {
        count
        links {
          id
          url
        }
      }
    }
  `;
  const data = useQuery(FEED_QUERY);
  console.log(data);

  return (
    <div>
      <h1>Главная</h1>
    </div>
  );
};
