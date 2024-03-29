import { client } from "@/utils/contentful";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { ImageLoader } from "next/image";
import Share from "@/components/Share/Share";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ContentWrapper from "@/components/News/ContentWrapper";

import styles from "@/styles/NewsIndividual.module.scss";

const contentfulImageLoader: ImageLoader = ({ src, width }) => {
  return `https:${src}?w=${width}`;
};

export default function NewsIndividual({ news, host }: any) {
  const pathname = usePathname();

  const renderOptions = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: (node: any) => {
        if (node.data.target.sys.contentType.sys.id === "blogPost") {
          return (
            <a href={`/blog/${node.data.target.fields.slug}`}>
              {" "}
              {node.data.target.fields.title}
            </a>
          );
        }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
          return (
            <pre>
              <code>{node.data.target.fields.code}</code>
            </pre>
          );
        }

        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        return (
          <Image
            className={"news__image"}
            loader={contentfulImageLoader}
            src={node.data.target.fields.file.url}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
          />
        );
      },
      [BLOCKS.TABLE]: (_: any, children: any) => (
        <TableContainer className={styles.table_container} component={Paper}>
          <Table>
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
      ),
      [BLOCKS.TABLE_ROW]: (_: any, children: any) => (
        <TableRow className={styles.table_row}>{children}</TableRow>
      ),
      [BLOCKS.TABLE_CELL]: (_: any, children: any) => (
        <TableCell className={styles.table_cell}>{children}</TableCell>
      ),
    },
  };

  return (
    <main className="main">
      <div className="container">
        <h1 className="h-1 page-heading">
          <Link className={styles.main_page_link} href={"/news?category=all"}>
            Новини
          </Link>{" "}
          / {news.title}
        </h1>
        <Share shareUrl={`https://${host}${pathname}`} title={news.title} />
        <article className={`${styles.content} text-1`}>
          <ContentWrapper>
            {renderRichText(news.content, renderOptions)}
          </ContentWrapper>
        </article>
      </div>
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const { items } = await client.getEntries({
    content_type: "news",
    "sys.id": context.params.id,
  });

  const news = items[0]?.fields;
  return {
    props: {
      news: JSON.parse(JSON.stringify(news)),
      host: process.env["HOST"] || null,
    },
  };
}
