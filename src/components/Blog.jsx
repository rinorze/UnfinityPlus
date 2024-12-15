import "../styles/Blog.scss";
import img1 from "../assets/blog1-1.jpg";
import img2 from "../assets/blog2-1.jpg";
import img3 from "../assets/blog3-1.jpg";

const blogPosts = [
  {
    id: 1,
    image: img1,
    title: "Construction Industry Needs 10000 More Workers",
    excerpt:
      "Fusce vitae augue tortor. Integer ultrices vulputate nisi, nec suscipit leo aliquam vitae. Morbi est urna, tincidunt...",
    category: "Construction"
  },
  {
    id: 2,
    image: img2,
    title: "Frederick construction set to end soon",
    excerpt:
      "Fusce vitae augue tortor. Integer ultrices vulputate nisi, nec suscipit leo aliquam vitae. Morbi est urna, tincidunt...",
    category: "Finance"
  },
  {
    id: 3,
    image: img3,
    title: "Construction Worker Safety Law Signed",
    excerpt:
      "Fusce vitae augue tortor. Integer ultrices vulputate nisi, nec suscipit leo aliquam vitae. Morbi est urna, tincidunt...",
    category: "Business"
  }
];

const Blog = () => {
  return (
    <section style={{ width: "100%", backgroundColor: "white" }}>
      <div className="blog-container">
        <div className="blog-header">
          <h1>Blog & Article</h1>
          <p>
            Follow our latest news and thoughts which focuses exclusively on
            design, art, vintage, and also work updates.
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <button className="read-more">Read More...</button>
                  <span className={`category ${post.category.toLowerCase()}`}>
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <button className="news">More News</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
