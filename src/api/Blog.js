// Add a Blog
export const addBlog = async blogData => {
    const response = await fetch('http://localhost:5000/blogs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(blogData),
    })
  
    const data = await response.json()
    return data;
  }

  // Get all Blogs to
export const getAllBlogs = async () => {
  const response = await fetch('http://localhost:5000/blogs')
  const data = await response.json()
  return data
}

// Get blog details

export const getBlog = async(id) => {
    const response = await fetch(`http://localhost:5000/blogDetails/${id}`)
    const data = await response.json()
    return data;
}

