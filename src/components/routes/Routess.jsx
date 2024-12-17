import React from 'react'
import "./routes.css"

const Routess = () => {
  return (
      <>
      <div className="container">
    <div className='when'>
      <h1>Routes</h1> <br />
      <p>All HTTP methods are supported. You can use http or https for your requests.</p>
    </div>


     <div className="routes-inner">
  <div className="routes-inner-1">
  <div className="routes-inner-p1"><p>GET</p></div>
    <a href="https://jsonplaceholder.typicode.com/posts">/posts</a>
  </div>
  <div className="routes-inner-2">
  <div className="routes-inner-p1"><p>GET</p></div>
    <a href="https://jsonplaceholder.typicode.com/posts/1">/post/1</a>
  </div>
  <div className="routes-inner-3">
  <div className="routes-inner-p1"><p>GET</p></div>
    <a href="https://jsonplaceholder.typicode.com/posts/1/comments">/posts/1/comments</a>
  </div>
  <div className="routes-inner-4">
  <div className="routes-inner-p1"><p>GET</p></div>
    <a href="https://jsonplaceholder.typicode.com/comments?postId=1">/comments?postId=1</a>
  </div>
  <div className="routes-inner-5">
  <div className="routes-inner-p1"><p>POST</p></div>
    <a href="https://jsonplaceholder.typicode.com/todos">/posts</a>
  </div>
  <div className="routes-inner-6">
  <div className="routes-inner-p1"><p>PUT</p></div>
    <a href="https://jsonplaceholder.typicode.com/users">/posts/1</a>
  </div>
  <div className="routes-inner-7">
  <div className="routes-inner-p1"><p>PATCH</p></div>
    <a href="https://jsonplaceholder.typicode.com/users">/posts/1</a>
  </div>
  <div className="routes-inner-8">
  <div className="routes-inner-p1"><p>DELETE</p></div>
    <a href="https://jsonplaceholder.typicode.com/users">/posts/1</a>
  </div>

</div>



    <div className="h4">
        <h4>Note:</h4>
        <p>see <a href="https://jsonplaceholder.typicode.com/guide/">guide</a> for usage examples.</p>
    </div>



    </div>
    </>
  )
}

export default Routess
