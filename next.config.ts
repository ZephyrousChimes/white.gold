import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['mdx', 'ts', 'tsx'],
  
  experimental: {
    mdxRs: false
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-math']],
    rehypePlugins: [['rehype-katex']],
  }
});

export default withMDX(nextConfig);