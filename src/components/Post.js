import React,{ useEffect, useState } from 'react';

import './styles/post.css'
import { Divider } from '@material-ui/core';


const Post = ({ data })=>{

        return(
                <div className='post'>
                        <h1>Unusual Blog</h1>
                        { Array.isArray(data) ? data.map(i=>(
                        <div key={i.id} className='posts'>
                                <h2>Post-{i.id}</h2>
                                <Divider/>
                                <h1>{i.title}</h1>
                                <p>{i.body}</p>
                        </div>
                        )) :  (<div key={data.id} className='posts'>
                                <h2>Post-{data.id}</h2>
                                <Divider/>
                                <h1>{data.title}</h1>
                                <p>{data.body}</p>
                        </div>)
                        }
                </div>
                );
}

export default Post;
