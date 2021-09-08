import React, { useEffect,useState } from 'react';

export const UseEffectData = () => {
  const [page, changePage] = useState(1)
  const [articles, changeArticle] = useState([])

  useEffect(()=>{
    console.log('fetch')
    const url = `https://www.googleapis.com/youtube/v3`
    fetch(url)
      .then(res => res.json() )
      .then(res => {
      changeArticle(res);
    })
  },[])

    return (
      <>
      <p>{page}ページ</p>
      <input type="button" value="次" onClick={()=>changePage(prevPage=>prevPage+1)} />
      <ul>
        {articles.map(article=>(
          <li>{article.title.rendered}</li>
        ))}
      </ul>
      </>
    )
}
