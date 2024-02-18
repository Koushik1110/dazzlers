import { useContext } from "react";
import SectionHeader from "../components/SectionHeader";
import { BlogContext } from "../contexts/BlogContext";
import BlogCard from "../components/BlogCard";

const SavedBlogs = () => {
  const [state, dispatch] = useContext(BlogContext);

  return (
    <div className="container mx-auto px-5 sm:px-20 py-20">
      <SectionHeader
        heading={`Saved Items (${state?.blogs?.length})`}
        subHeading="These are the items that has managed to caught your eyes."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {state?.blogs?.length > 0 &&
          state.blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              catid={blog.catid}
            />
          ))}
      </div>
    </div>
  );
};

export default SavedBlogs;
