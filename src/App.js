import './App.css';
import axios from 'axios';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CartPage from './Pages/CartPage';
import ContactPage from './Pages/ContactPage';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setLoading, setPosts } from './Redux/postsSlice';



function App() { 
  const [postsLength, setPostsLength] = useState(0);

  const posts = useSelector((state)=>state.posts.posts)


  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        dispatch(setPosts(response.data));
        dispatch(setLoading(false));
    }) 
    .catch((e) => {
      console.log(e);
      dispatch(setLoading(false));
  })
  }, [])
  
  useEffect(() => {
    setPostsLength(posts.length);
  }, [posts])

  return (
    <div className="App">
      <Router>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App;
