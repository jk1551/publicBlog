import React from 'react'
import PostTemplate from '../../components/PostTemplate';
import { supabase } from '../../utils/supabaseClient'

export async function getServerSideProps(context) {
const slug = context.query.slug;
let { data: post, error } = await supabase
  .from('posts')
  .select("*")
  .eq('slug', slug)
        return {
          props: {
            post
          }, // will be passed to the page component as props
        }
      }

const slug = ({post, session}) => {
  return (
    <>
    {post && post.map((article) => {
        return (
            <div key={article.id}>
          <PostTemplate title={article.title} description={article.description} content={article.content} slug={article.slug} session={session}/>
          </div>
        )
      })}
      </>
  )
}

export default slug