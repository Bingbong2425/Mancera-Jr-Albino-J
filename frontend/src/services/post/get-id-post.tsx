import { useEffect, useState } from "react";
import { Post } from "../../types/post-type";
const GetPostById = (id: string | null) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id == null) {
        setLoading(true);
      }
      try {
        if (!id) return;
        const response = await fetch(`http://localhost:5000/post/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: Post = await response.json();

        // Ensure comments is at least an empty object
        if (!result.comments) {
          result.comments = {};
        }
        setPost(result);
        setLoading(false);
      } catch (err: any) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, [id]);

  return { post, loading };
};

export default GetPostById;
