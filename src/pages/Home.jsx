import ListPosts from "../Components/ListPosts"
import ListCategories from "../Components/ListCategories"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListPosts url={"/posts"}/>
    </main>
  )
}

export default Home
