import '../styles/intro.scss';
import News1 from '../img/latest_news_1.jpg';
import News2 from '../img/latest_news_2.jpg';
import News3 from '../img/latest_news_3.jpg';
import News4 from '../img/latest_news_4.jpeg';


function News() {
  //An array of information for the articles
  const articles = [
    {id: 1, image: News1, title: 'Earth\'s Mightiest Heroes: Avengers Comic to Read Right Now', link: ' https://www.marvel.com/articles/comics/earths-mightiest-heroes-avengers-marvel-comics-app-sale'},
    {id: 2, image: News2, title: 'The Skrulls Invade The Marvel Universe In New Variant Covers', link: 'https://www.marvel.com/articles/comics/the-skrulls-invade-the-marvel-universe-in-new-variant-cover'},
    {id: 3, image: News3, title: 'Witness the Explosive Power of Binary in the Next Arc Captain Marvel', link: ' https://www.marvel.com/articles/comics/witness-the-explosive-power-of-binary-in-the-next-arc-of-captain-marvel'},
    {id: 4, image: News4, title: 'January 5\'s New Marvel Comics: The Full List', link: '  https://www.marvel.com/articles/comics/january-5-2022-new-marvel-comics-collections-releases-full-list'},
  ]
  return (
    <div className='latest-news'>
      <div className='stroke'>
        <h2> latest news </h2>
      </div>
      <div className='articles'>
        {articles.map(article => (
          <div className='article' key={article.id}>
            <a href={article.link}>
              <img src={article.image} alt={article.title} />
              <h5 style={{'color': '#767676'}}> COMICS </h5>
              <h5> 
                {article.title}
              </h5>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;