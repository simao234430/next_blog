import { useMDXComponent } from 'next-contentlayer/hooks';
export const Mdx = (props: MdxProps) => {
    const MdxComponent = useMDXComponent(props.code);
    return (
     
        <MdxComponent components={{  } as MDXComponents} />
 
    );
  };
  