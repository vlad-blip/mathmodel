import { PrismaClient } from "@prisma/client";
import { useState, useEffect, Fragment } from "react";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import Link from "next/link";

import styles from "@/styles/NewsIndividual.module.scss";

export default function NewsIndividual({ code, news }: any) {
  const [mdxModule, setMdxModule] = useState() as any;

  const Content = mdxModule ? mdxModule.default : Fragment;

  useEffect(() => {
    (async () => {
      setMdxModule(await run(code, runtime));
    })();
  }, [code]);

  return (
    <main className="main">
      <div className="container">
        <h1 className="h-1 page-heading">
          <Link className={styles.main_page_link} href={"/news"}>
            Новини
          </Link>{" "}
          / {news.title}
        </h1>
        <article className={`${styles.content} text-1`}>
          <Content />
          {/* <ImagesCarousel className={styles.carousel} images={news.images} /> */}
        </article>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient();
  const news = await prisma.news.findUnique({
    where: { id: context.params.id },
  });

  const code = String(
    await compile(`${news?.content}`, {
      outputFormat: "function-body",
      development: false,
      remarkPlugins: [remarkGfm],
    })
  );
  return { props: { code, news: JSON.parse(JSON.stringify(news)) } };
}
