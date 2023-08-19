import './style.scss';

// const scene = document.getElementById('scene');
// const parallax = new parallax(scene);
const PageNotFound = () => {
  return (
    <div className="pageNotFound">
        <main>
            <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
            <h2>Error: 404 page not found</h2>
            <p>Sorry, the page you're looking for cannot be accessed</p>
            <p>We might still be working on it...</p>
        </main>
    </div>
    );
}

export default PageNotFound;