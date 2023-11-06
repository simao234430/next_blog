import { Mdx } from '@/components/mdx';
import { allPosts,Post } from 'contentlayer/generated'
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';


export const getStaticPaths: GetStaticPaths = async () => {
  
    return {
      paths: allPosts.map((p: Post) => ({
        params: {
          slug: p.slug
        },
      })),
      fallback: true,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
      console.time(`getStaticProps /blog/${params!.slug}`)

      const post = allPosts.find((_: { slug: any }) => _.slug === params?.slug)!

      console.timeEnd(`getStaticProps /blog/${params!.slug}`)
      return { props: { post } }
    } catch (error) {
      // eslint-disable-next-line
      console.log(error)
      return { notFound: true }
    }
  }

  const Blog = ({ post }: BlogProps) => {
    const { isFallback } = useRouter();
  
    if (isFallback || !post) {
      return <div>Loading...</div>;
    }
 
  
    return (
  
        <>
        <Mdx code={post?.body?.code} />
        </>

  
    );
  };
  export default Blog;
