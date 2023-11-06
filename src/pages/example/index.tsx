import { allExamples } from 'contentlayer/generated'
 
export default function BlogPage() {
    return (
        <>
          {allExamples.map((post, index) => (
            // eslint-disable-next-line react/jsx-key
            <div>
                {post.title}
            </div>
          ))}
        </>
    )
  }