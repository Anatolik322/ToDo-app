import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppHeader from '../app-header';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import PostAddForm from '../post-add-form';

import './app.css'
import './index.css'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
            {
                label: 'lorem',
                important: true,
                like: false,
                id: 'fefs'
            },
            {
                label: 'buy table',
                important: false,
                like: false,
                id: 'sssf'
            },
            {
                label: 'send my profile',
                important: false,
                like: false,
                id: 'efsfe'
            }
            ],
            term: '',
            filter: 'all'
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    deleteItem(id){
        this.setState(({data}) =>{
            const index = data.findIndex(item => item.id = id);
            const newArr = [...data.slice(0, index),  ...data.slice(index+1)];
            
            return{
                data : newArr
                }
            
        });    
    }

    onAdd(body){
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: uuidv4()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })
    }

    onToggleImportant(id){
        console.log(`Important ${id}`);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id );
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return{
                data: newArr
            }
        })
    };

    onToggleLike(id){
        console.log(`Liked ${id}`);
        this.setState(() => {
            const index = this.state.data.findIndex(elem => elem.id === id );
            const old = this.state.data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...this.state.data.slice(0, index), newItem, ...this.state.data.slice(index + 1)];
            
            return{
                data: newArr
            }
            
        })
    }
    
    onFilter(items, filter){
        if(filter === 'like'){
            return items.filter(item => item.like);
        }else{
            return items;
        }
    }
    searchPost(posts, term){
        if(term.length === 0){
            return posts;
        }

        return posts.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    onFormChange(term){
        this.setState({term})
    }

    onFilterSelect(filter){
        this.setState({filter: filter})
    }
    

    render(){
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allElements = data.length;
        const visiblePosts = this.onFilter(this.searchPost(data, term), filter);

        return (
            <div className='app'>
                <AppHeader
                liked = {liked}
                allElements = {allElements}
                
                />,
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onFormChange = {this.onFormChange}
                     />
                    <PostStatusFilter
                     onFilterSelect = {this.onFilterSelect}
                     />
                </div>
                <PostList
                 posts={visiblePosts}
                 deleteEvent = {this.deleteItem}
                 onToggleLike = {this.onToggleLike}
                 onToggleImportant = {this.onToggleImportant}   />
                <PostAddForm
                 onAdd = {this.onAdd} />
            </div>
        )
    }
}



