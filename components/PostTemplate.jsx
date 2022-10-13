import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

const PostTemplate = ({ id, author, time, title, description, content, session}) => {

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article key={id} className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                      <div>
                          <a rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{author}</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400"><time>{time}</time></p>
                      </div>
                  </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
          </header>
          <p className="lead">{description}</p>
          <p>{content}</p>
          <section className="not-format">
              <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
              </div>
              <form className="mb-6">
                          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                              <label htmlFor="comment" className="sr-only">Your comment</label>
                              <textarea id="comment" rows="6"
                                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                  placeholder="Write a comment..." required></textarea>
                          </div>
                          {session ?
                          <>
                        <h1>There is a user you are allowed to post</h1>
                        <button 
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                              Post comment
                          </button>
                          </>
                        :
                        <>
                        <h1>Please Sign Up / Sign In to post a comment</h1>
                        <button 
                        disabled={true}
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                              Post comment
                          </button>
                          </>
                        }
                          
                      </form>
          </section>
      </article>
  </div>
</main>
  )
}

export default PostTemplate