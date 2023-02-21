import { useState } from "react";
import { Link } from "react-router-dom";
export const Comments = ({ id, comments, user }) => {
  const [comment, setComment] = useState("");
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const submitComment = (e) => {
    e.preventDefault();
    const commentData = {
      username: user.username, //
      blogID: id,
      content: comment,
    };
    fetch(`http://localhost:5000/blogs/${id}/comments`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res);
        } else {
          setComment("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeComment = (commentId) => {
    fetch(`http://localhost:5000/blogs/${id}/comments/${commentId}`, {
      mode: "cors",
      method: "DELETE",
      credentials: "include",
    }).then((res) => {});
  };
  return (
    <div className="py-6">
      <h1 className="w-fit m-auto text-xl text-bold">Comments</h1>
      <div className="flex flex-col gap-6 pt-6 justify-center items-center">
        {user && (
          <form className="flex gap-1" onSubmit={submitComment}>
            <input
              className="p-2 text-black"
              value={comment}
              onChange={commentChange}
            />
            <button className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-2 px-8 rounded">
              Add
            </button>
          </form>
        )}
        {!user && (
          <div>
            {!user && (
              <div className="flex flex-col gap-1 items-center ">
                <span>You need to have an Account to post comments</span>
                <span className="w-fit uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-1 px-4 rounded">
                  <Link to="/login">Log in </Link>
                </span>
                <span className="w-fit font-bold text-xl ">or</span>
                <span className=" uppercase shadow bg-slate-600 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white  py-1 px-4 rounded">
                  <Link to="/signup">Sign up</Link>
                </span>
              </div>
            )}
          </div>
        )}
        {comments &&
          comments.map((comment) => {
            return (
              <div
                key={comment._id}
                className="border-2 border-white p-4 flex  w-10/12"
              >
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <span>@{comment.username}</span>
                    <span>{new Date(comment.timeStamp).toDateString()}</span>
                  </div>
                  <span>{comment.content}</span>
                </div>
                <div className="w-fit p-1">
                  {user && comment.username === user.username && (
                    <button
                      onClick={() => {
                        removeComment(comment._id);
                      }}
                      className=" uppercase shadow bg-red-600 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white  py-2 px-3 rounded"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
