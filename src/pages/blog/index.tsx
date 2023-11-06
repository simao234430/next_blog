import { allPosts } from 'contentlayer/generated'
 
export default function BlogPage() {
    return (
        <>
          {allPosts.map((post, index) => (
            // eslint-disable-next-line react/jsx-key
            <div>
                {post.title}
            </div>
          ))}
        </>
    )
  }