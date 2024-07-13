//export  const  taglist = ["All","music","live","gaming", "news","learning","sports","travel","comedy","tech","movies"]
//import {useDispatch} from "react-redux";
//import { setCategory } from '../utils/appSlice';


//import {useState} from 'react';

/*const tags = [
  'All',
  'popular',
  'trending',
  'Music',
  'Live',
  'Gaming',
  'News',
  'Learning',
  'Sports',
  'Travel',
  'Tech',
  'Comedy',
  'Movies',
  'cricket',
  'thriller'
];

const TagList = () => {
  
  return (
    <div className="flex overflow-x-auto space-x-3 p-4 bg-white shadow-md ">
      {tags.map((tag, index) => (
        <button
          key={index}
          className= " bg-gray-200 px-2 py-1 rounded-md" 
       
       
       >
        {tag}
      </button> 
      ))}
    </div>
  );
};

export default TagList;*/



/*import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from './slices/appslice'

const tags = [
  'All',
  'popular',
  'trending',
  'Music',
  'Live',
  'Gaming',
  'News',
  'Learning',
  'Sports',
  'Travel',
  'Tech',
  'Comedy',
  'Movies',
  'cricket',
  'thriller'
];

const TagList = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("All");


  const handleTagClick = (tag) => {
    dispatch(setCategory(tag)); // Dispatch the setCategory action with the selected tag
  };

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  }
  console.log(active);


  return (
    <div className="flex overflow-x-auto space-x-3 p-4 bg-white shadow-md">
      {tags.map((tag, index) => (
        <button
          key={index}
          // eslint-disable-next-line no-undef
          className={`px-2 py-1 rounded-md ${selectedCategory === tag ? 'bg-gray-300' : 'bg-gray-200'}`}
          onClick={() => videoByTag(tag)}
        >
          {tag}
        </button>
      
        /*<button onClick={() => { videoByTag(tag) }} className={`${active === tag ? "bg-slate-900 text-white" : "bg-gray-200"} w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg`}><span className="whitespace-nowrap">{tag}</span></button>
      
        ))}
    </div>
  );
};

export default TagList;*/



/*import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from './slices/appslice';

const tags = [
  'All', 'Popular', 'Trending', 'Music', 'Live', 'Gaming', 'News', 'Learning', 'Sports', 'Travel', 'Tech', 'Comedy', 'Movies', 'Cricket',
];

const TagList = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('All');

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };

  return (
    <div className="flex overflow-x-scroll no-scrollbar py-2 bg-white">
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => videoByTag(tag)}
          className={`${
            active === tag ? 'bg-black text-white' : 'bg-gray-100 text-black'
          } whitespace-nowrap px-4 py-2 m-1 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;*/


// src/components/TagList.js
//import React from 'react';

const tags = [
  'All',
  'Music',
  'Live',
  'Gaming',
  'News',
  'Learning',
  'Sports',
  'Travel',
  'Tech',
  'Comedy',
  'Movies',
  'cricket',
  'thriller',
];

const TagList = () => {
  return (
    <div className="flex overflow-x-auto space-x-3 p-4 bg-white shadow-md">
      {tags.map((tag, index) => (
        <button
          key={index}
          className="flex-shrink-0 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;




