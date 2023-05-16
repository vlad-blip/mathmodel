import { PrismaClient } from "@prisma/client";

import Link from "next/link";
import ImagesCarousel from "@/components/ImagesCarousel/ImagesCarousel";

import styles from "@/styles/NewsIndividual.module.scss";

export default function NewsIndividual({ news }: any) {
  return (
    <main className="main">
      <div className="container">
        <h1 className="h-1 page-heading">
          <Link className={styles.main_page_link} href={"/news"}>
            Новини
          </Link>{" "}
          / {news.title}
        </h1>
        <div>
          <p className={`${styles.content} text-1`}>{news.content}</p>
          <ImagesCarousel className={styles.carousel} images={news.images} />
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient();
  const news = await prisma.news.findUnique({
    where: { id: context.params.id },
  });

  return {
    props: {
      news: JSON.parse(JSON.stringify(news)),
    },
  };
}
