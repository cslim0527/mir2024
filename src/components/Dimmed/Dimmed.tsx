import styles from "./Dimmed.module.scss";

interface DimmedProps {
  handleClose?: () => void;
}
const Dimmed = ({ handleClose }: DimmedProps) => {
  return <div className={styles.dimmed} onClick={() => handleClose?.()} />;
};

export default Dimmed;
