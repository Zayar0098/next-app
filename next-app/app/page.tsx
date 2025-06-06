import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";
// type News = {
//   id : string;
//   title : string 
//   category : {
//     name : string;
//   };
//   publishedAt : string;
//   createdAt : string;
// };



export default async function Home() {
  const name = '世界';
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  })
  return (
    <>
    <section className={styles.top}>
    <div>
  <h1 className={styles.title}>テクナロジーの力で{name}を変える </h1>
  <p className={styles.description}>私は市場をリードしているグローバルカンパニーです。</p>
  </div>
  <Image 
  className ={styles.bgimg}
  src= "/img-mv.jpg"
  alt =""
  width={4000}
  height={1200}
  />
  </section>
  <section className={styles.news}>
    <h2 className={styles.newsTitle}>
      News</h2>
      <NewsList news = {data.contents}/>
<div className= {styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
  </section>
  </>
  );
}
