import NavBar from './Components/Header/NavBar';
import PostWidget from './Components/Posts/PostWidget';
import PostCard from './Components/Posts/PostCard';
import Categories from './Components/Category/Categories';
import Container from 'react-bootstrap/Container';
import { GetPosts as getPosts } from './Services/GetPosts';
// React Bootstrap single components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

const dummyPosts = [
  {title:"post1" , content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in..."},
  {title:"post2" , content:"lorem ipsum date cun echo2"},
];


export const getPostsData = async () => {

  const posts = (await getPosts()) || ['empty'];

  console.log( posts);
};


export default function App () {

  let posts = getPostsData(); 
  // getPostsData().then((data) => {posts = data});
  console.log(posts)

  // posts.then((data) => console.log(data))


  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col md="8">
          {dummyPosts.map((post, index) => (<PostCard post={post} key={index} />))}
          </Col>
          <Col md="4">
            <div className="sticky-top">
              <Categories />
              <PostWidget />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
