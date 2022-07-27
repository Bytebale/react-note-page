import React, {useState} from 'react';
import MyInput from "./UI/input/myInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент двухчтороннего связывания*/}
            <MyInput
                value = {post.title}
                onChange={event => setPost({...post, title: event.target.value})}
                type={'text'}
                placeholder={"Set title"}
            />
            <MyInput
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
                type={'text'}
                placeholder={"Set description"}
            />
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;