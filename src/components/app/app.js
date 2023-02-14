import React, {useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppHeader from '../app-header';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import PostAddForm from '../post-add-form';

import './app.css'
import './index.css'

export default function  App (){
   
        
    const [data, setData] = useState(
    [{
        label: 'Купити хліба',
        important: false,
        like: false,
        id: 'f1'
    },
    {
        label: 'Купити стіл',
        important: false,
        like: false,
        id: 'ss3sf'
    },
    {
        label: 'Надіслати резюме',
        important: false,
        like: false,
        id: 'e5fsfe'
    }
    ])
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    
    
    const deleteItem = id => {
        
        const index = data.findIndex(item => item.id = id);
        setData(data.filter((_ , i) => i !== index))      
    }

    const onAdd = body => {
        const newItem = {
            label: body + '',
            important: false,
            like: false,
            id: uuidv4()
        }

        if(newItem.label.length > 22){
            newItem.label = newItem.label.slice(0, 22) + '...';
        }

        const newArr = [...data, newItem];
        setData(newArr);
    }

    const onToggleImportant = id => {

        const index = data.findIndex(elem => elem.id === id );
        const old = data[index];
        const newItem = {...old, important: !old.important};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData(newArr);
    };

    const onToggleLike = id => {
        
        const index = data.findIndex(elem => elem.id === id );
        const old = data[index];
        const newItem = {...old, like: !old.like};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData(newArr);
    }
    
    const onFilter = (items, filter) => {

        if(filter === 'like'){
            return items.filter(item => item.like);
        }else{
            return items;
        }
    }

    const searchPost = (posts, term) => {

        if(term.length === 0){
            return posts;
        }

        return posts.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    const onnFormChange = term => {
        setTerm(term + '');
    };

    const onFilterSelect = filter => {
        setFilter(filter);
    }
    
    const liked = data.filter(item => item.like).length;
    const allElements = data.length;
    const visiblePosts = onFilter(searchPost(data, term), filter);

    return (
        <div className='app'>
            <AppHeader
            liked = {liked}
            allElements = {allElements}
            
            />,
            <div className='search-panel d-flex'>
                <SearchPanel
                    onFormChange = {onnFormChange}
                 />
                <PostStatusFilter
                 onFilterSelect = {onFilterSelect}
                 />
            </div>
            <PostList
             posts={visiblePosts}
             deleteEvent = {deleteItem}
             onToggleLike = {onToggleLike}
             onToggleImportant = {onToggleImportant}   />
            <PostAddForm
             onAdd = {onAdd} />
        </div>
    )  
}



