import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "My Blogs",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section className="animate-page-enter">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Blogs</h1>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-2 group card-lift"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <p className="text-black dark:text-white tracking-tight flex items-center gap-2">
                  {post.metadata.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-neutral-400 dark:text-neutral-500 font-normal">
                    →
                  </span>
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm shrink-0">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
