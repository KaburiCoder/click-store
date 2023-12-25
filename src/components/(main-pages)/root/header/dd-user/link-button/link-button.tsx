import classNames from "classnames";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./link-button.module.scss";

interface LinkButtonProps {
  icon: IconType;
  href: string;
  text: string;
  admin?: boolean;
  onLinkClick: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  icon: Icon,
  text,
  admin,
  onLinkClick,
}: LinkButtonProps) => {
  return (
    <li className={classNames(styles.link_li, admin && styles.admin)}>
      <Link href={href} className={styles.link} onClick={onLinkClick}>
        <Icon className={styles.icon} />
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default LinkButton;
