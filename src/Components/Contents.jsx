// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

import { useEffect, useState } from "react";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Contents = () => {
    // const { data: post = [] } = useQuery({
    //     queryKey: [post],
    //     queryFn: async () => {
    //         const result = await axios.get('data.json')
    //         console.log(result.data);
    //         return result.data
    //     }
    // })
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(result => result.json())
            .then(data => {
                console.log(data);
                setPost(data)
            })
    }, [])
    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <h3 className="text-2xl font-semibold">Contents </h3>
            {
                post.map(content =>
                    <div key={content.user_name} className="card max-w-screen-2xl mx-auto my-8 bg-base-100 shadow-xl ">
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
                            <button className="btn text-2xl hover:text-red-600 btn-outline hover:border-red-600 "><FaRegHeart /> <FaHeart />

                            </button>
                            <button className="btn text-2xl hover:text-blue-600 btn-outline hover:border-blue-600 "><FaRegComment />
                            </button>
                            <button className="btn text-2xl hover:text-red-600 btn-outline hover:border-red-600 "><MdDelete />
                            </button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Contents;