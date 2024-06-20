import axios from "axios";

import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
import { BiPlus } from "react-icons/bi";

const Contents = () => {
    const { user } = useContext(AuthContext)
    const [isLike, setLike] = useState(false)
    const [isComment, setComment] = useState(false)
    const [comment, setComments] = useState([])
    const [commentId, setCommentId] = useState(null)
    const [post, setPost] = useState([])
    const loadData = async () => {
        await fetch('https://socii-net-server.vercel.app/allPost')
            .then(result => result.json())
            .then(data => {
                console.log(data);
                setPost(data)
            })
    }
    useEffect(() => {
        loadData()
    }, [])

    const handleDelete = async (content) => {
        if (user.displayName !== content.user_name) {
            return;
        }
        const result = await axios.delete(`https://socii-net-server.vercel.app/deletePost/${content._id}`)
        if (result.data) {
            console.log(result.data);
            loadData()
        }
    }
    const Post = async (e) => {
        const form = e.target;
        const caption = form.caption.value;
        const photo = form.photo.value;
        const post = {
            user_name: user.displayName,
            user_photo: user.photoURL,
            caption: caption,
            post_photo: photo,
            like_count: 0
        }
        const result = await axios.post('https://socii-net-server.vercel.app/newPost', post)
        if (result.data.insertedId) {
            console.log(result.data, "successfully add");
            loadData();
        }
    }
    const showComments = async (id) => {
        const result = await axios.get(`https://socii-net-server.vercel.app/Comment/${id}`)
        if (result) {
            console.log(result);
            setComment(!isComment);
            setCommentId(id)
            setComments(result.data)
        }
    }
    const Comment = async (e) => {
        e.preventDefault();
        const commentText = e.target.Comment.value
        const newComment = {
            comment: commentText,
            user_photo: user.photoURL,
            user_email: user.email,
            contentId: commentId
        }
        console.log(newComment);
        const result = await axios.post(`https://socii-net-server.vercel.app/newComment`, newComment)
        if (result.data) {
            console.log(result.data, "successfully add");
            showComments(commentId);
        }
    }
    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <h3 className="text-2xl font-semibold">Contents </h3>
            {
                post.map(content =>
                    <div key={content._id} className="card max-w-screen-2xl mx-auto my-8 bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <div className="flex items-center gap-6">
                                <div className="avatar">
                                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={content.user_photo} />
                                    </div>
                                </div>
                                <h2 className="card-title ">{content.user_name}</h2>
                            </div>
                            <p>{content.caption}</p>
                        </div>
                        <img src={content.post_photo} alt="post" />
                        <div className="my-4 flex gap-5">
                            {
                                isLike ?
                                    <button onClick={() => setLike(!isLike)} className="flex items-center btn text-2xl text-red-600 btn-outline "> <FaHeart /> {content.like + 1}
                                    </button>
                                    :
                                    <button onClick={() => setLike(!isLike)} className="btn text-2xl hover:text-red-600 btn-outline hover:border-red-600 flex items-center"><FaRegHeart /> {content.like}
                                    </button>
                            }

                            <button onClick={() => showComments(content._id)} className="btn text-2xl hover:text-blue-600 btn-outline hover:border-blue-600 "><FaRegComment />
                            </button>
                            <button className="btn text-2xl hover:text-red-600 btn-outline hover:border-red-600 "
                                onClick={() => handleDelete(content)}><MdDelete />
                            </button>
                        </div>
                        {isComment &&
                            <>
                                {comment.map(comment => <div key={comment.user_name} className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS chat bubble component" src={comment.user_photo} />
                                        </div>
                                    </div>
                                    <div className="chat-bubble">{comment.comment}</div>
                                </div>)}
                                <form onSubmit={Comment}>
                                    <label className="input input-bordered flex items-center gap-2 mt-3">
                                        <input type="text" className="grow " placeholder="Comment" name="Comment" required/>
                                        <button>Send</button>
                                    </label>
                                </form>
                            </>
                        }

                    </div>)
            }



            {/* add post */}
            {
                user &&
                <div>
                    <button className="btn btn-circle btn-outline text-3xl font-thin  right-10 bottom-10 fixed" onClick={() => {
                        document.getElementById('my_modal').showModal();
                    }}><BiPlus /></button>
                </div>
            }



            <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl">Post</h3>
                    <p className="py-4">Share your memories with us </p>
                    <div className="modal-action flex-col">
                        <form method="dialog" className="space-y-3" onSubmit={Post}>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Caption" name="caption" required />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow " placeholder="Image URL" name="photo" required />
                            </label>
                            <div>
                                <button className="btn w-full btn-outline mt-3">Post</button>
                            </div>

                        </form>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>


                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Contents;