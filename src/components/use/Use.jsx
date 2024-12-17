import React from 'react'
import "./use.css"

const Use = () => {
  return (
      <>
      <div className="container">
    <div className='when'>
      <h1>When to use</h1> <br />
      <p>JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
    </div>

    <div className="resource">
     <h1>Resources</h1> <br />
     <p>JSONPlaceholder comes with a set of 6 common resources:</p>
     <div className="resources-inner">
  <div className="resource-inner-1">
    <a href="https://api-project-by-ahmed.vercel.app/post/posts">/posts</a>
    <p>100 posts</p>
  </div>
  <div className="resource-inner-2">
    <a href="https://api-project-by-ahmed.vercel.app/comment/comments">/comments</a>
    <p>500 comments</p>
  </div>
  <div className="resource-inner-3">
    <a href="https://api-project-by-ahmed.vercel.app/album/albums">/albums</a>
    <p>100 albums</p>
  </div>
  <div className="resource-inner-4">
    <a href="https://api-project-by-ahmed.vercel.app/photo/photos">/photos</a>
    <p>5000 photos</p>
  </div>
  <div className="resource-inner-5">
    <a href="https://api-project-by-ahmed.vercel.app/todo/todos">/todos</a>
    <p>200 todos</p>
  </div>
  <div className="resource-inner-6">
    <a href="https://api-project-by-ahmed.vercel.app/user/users">/users</a>
    <p>10 users</p>
  </div>
</div>

    </div>

    <div className="h4">
        <h4>Note:</h4>
        <p>resources have relations. For example: posts have many comments, albums have many photos, ... see <a href="https://jsonplaceholder.typicode.com/guide/">guide</a> for the full list.</p>
    </div>



    </div>
    </>
  )
}

export default Use
