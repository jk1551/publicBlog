import React from 'react'
import { supabase } from '../utils/supabaseClient';
import PostCard from '../components/PostCard';

export async function getServerSideProps(context) {
let { data: blogPost, error } = await supabase
.from('posts')
.select('*')
    return {
      props: {
        blogPost
      }, // will be passed to the page component as props
    }
  }


const posts = ({ blogPost }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Blog Posts</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Blogs include findings from work, personal projects, or open source contributions</p>
      </div> 
      <div className="grid gap-8 lg:grid-cols-2">
        {blogPost && blogPost.map((post) => {
          return (
            <div key={post.id}>
            <PostCard title={post.title} description={post.description} slug={post.slug} />
            </div>
          )
        })}
      </div>  
  </div>
</section>
  )
}

export default posts