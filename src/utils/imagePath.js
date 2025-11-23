/**
 * 处理图片路径，确保在GitHub Pages上正确加载
 * @param {string} path - 图片路径（如 /products/image.png）
 * @returns {string} - 处理后的路径
 */
export function getImagePath(path) {
  // 如果是绝对路径（以/开头），需要包含base路径
  if (path && path.startsWith('/')) {
    // import.meta.env.BASE_URL 在构建时会包含base路径（如 /WorldCupShowcase/）
    // 在开发环境，BASE_URL 通常是 /
    const base = import.meta.env.BASE_URL || '/'
    
    // 确保base以/结尾
    const normalizedBase = base.endsWith('/') ? base : base + '/'
    
    // 移除path开头的/，然后与base拼接
    // 例如：/products/image.png + /WorldCupShowcase/ = /WorldCupShowcase/products/image.png
    return normalizedBase + path.slice(1)
  }
  return path || ''
}
