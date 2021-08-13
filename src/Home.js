import { useState } from 'react';
import BlogList from './Bloglist';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: "lorem ipsum...", author: "mario", id: 1},
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2},
        { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3}
    ]);

    const handleClick = () => {
        
    }
    
   
    return ( 
        <div className="home">
            <BlogList blogs = { blogs } />
           
            
        </div>
     );
}
 
export default Home;