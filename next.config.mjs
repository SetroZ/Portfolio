



import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:'qbmtaiocrbamialjmhxc.supabase.co',
            port:'',
            
        }
    ]
}
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    development:process.env.NODE_ENV === 'development',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)