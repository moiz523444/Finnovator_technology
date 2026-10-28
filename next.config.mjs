/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for shared hosting (Hostinger): upload the generated `out/` folder to public_html
  output: 'export',
  // Emit /about/index.html etc. so Apache/LiteSpeed serves clean URLs without rewrites
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
