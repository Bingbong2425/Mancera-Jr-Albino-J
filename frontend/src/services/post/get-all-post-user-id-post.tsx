import { useEffect, useState } from "react";
import { Post } from "../../types/post-type";
const GetAllPostUserId = (id: string) => {
  const [postProfile, setPostProfile] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/post/user/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: Post[] = await response.json();
      setPostProfile(result);
    };
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, [id]);
  return { postProfile };
};

export default GetAllPostUserId;
