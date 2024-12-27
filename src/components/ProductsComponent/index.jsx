import './ProductsComponent.css'
import { MoonLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItems, removePosts } from '../../Redux/postsSlice';
import { useState, useEffect } from 'react';
import EmptyHeart from '../../assets/images/EmptyHeart.png'
import FilledHeart from '../../assets/images/FilledHeart.png'

const ProductsComponent = ({ posts, loading }) => {
  const [addedToCartList, setAddedToCartList] = useState([]);
  const cartItems = useSelector((state) => state.posts.cartItems);

  useEffect(() => {
    console.log(cartItems, 'cartItems-test')
  },[posts])

  const toggleHeart = (index, post) => {
    // if (addedToCartList) {
    //   setAddedToCartList(false)
    // } else {
    //   setAddedToCartList(true)
    // }
    dispatch(addCartItems(post))
    setAddedToCartList([...addedToCartList, index]);
  }

  const [inputValue, setInputValue] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

   const dispatch = useDispatch();

  const removePost = (id) => {
    dispatch(removePosts(id));

    setFilteredPosts((prevFilteredPosts) => prevFilteredPosts.filter(post => post.id !== id));
  };


  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };


  const filterPosts = () => {
    if (inputValue === '') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredPosts(filtered); 
    }
  };

  useEffect(() => {
    if (inputValue === '') {
      setFilteredPosts(posts);
    }
  }, [inputValue, posts]);

  return (
    <div className='productsContainer'>
      <div className="input-container">
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Type title name' 
        />
        <div className="btn">
          <button onClick={filterPosts}>Search</button>
        </div>
      </div>

      {loading ? (
        <div className='loading'><MoonLoader/></div>
      ) : (
          <div className="products">
          {filteredPosts.map((post, index) => (
            <div className='product' key={post.id}>
              <p>{post.body}</p>
              <h1>{post.title}</h1>
              <div className="remove-add-btns">
                <div className='heartbtn' onClick={()=> toggleHeart(index, post)}>
                  {
                   cartItems.some(item => item.id === post.id) ? 
                   <img src={FilledHeart} alt="" /> :
                   <img src={EmptyHeart} alt=""/>
                  }
              </div>
             </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsComponent;
