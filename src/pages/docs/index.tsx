import { allDocs } from 'contentlayer/generated'
 
export default function BlogPage() {
    return (
        <>
          {allDocs.map((post, index) => (
            // eslint-disable-next-line react/jsx-key
            <div>
                {post.title}
            </div>
          ))}
        </>
    )
  }