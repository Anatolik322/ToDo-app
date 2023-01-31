import React from 'react';
import AppHeader from '../app-header';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';
import PostAddForm from '../post-add-form';
import './app.css'
import './index.css'

const App = () => {
    const data = [{
        label: 'Text 1',
        important: true,
        id: 'fesfd'
    },
    {
        label: 'Text 2',
        important: false,
        id: 'f3esffd'
    },
    {
        label: 'Text 3',
        important: false,
        id: 'fesefwwd'
    }];
    return (
        <div className='app'>
            <AppHeader />,
            <div className='search-panel d-flex'>
                <SearchPanel />
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App;

