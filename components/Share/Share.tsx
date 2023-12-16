import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import styles from "./Share.module.scss";

type ShareProps = {
  shareUrl: string;
  title: string;
};

export default function Share({ shareUrl, title }: ShareProps) {
  return (
    <ul className={styles.network_list}>
      <li>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <div>
          <FacebookShareCount
            url={shareUrl}
            className="Demo__some-network__share-count"
          >
            {(count) => count}
          </FacebookShareCount>
        </div>
      </li>
      <li>
        <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
      </li>
      <li>
        <TwitterShareButton url={shareUrl} title={title}>
          <XIcon size={32} round />
        </TwitterShareButton>
      </li>
      <li>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </li>
      <li>
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </li>
      <li>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </li>
      <li>
        <EmailShareButton url={shareUrl} subject={title} body="body">
          <EmailIcon size={32} round />
        </EmailShareButton>
      </li>
      <li>
        <ViberShareButton url={shareUrl} title={title}>
          <ViberIcon size={32} round />
        </ViberShareButton>
      </li>
    </ul>
  );
}
