import styled from "styled-components";

interface DimmedProps {
  handleClose?: () => void;
}
const Dimmed = ({ handleClose }: DimmedProps) => {
  return <Wrapper onClick={() => handleClose?.()} />;
};

export default Dimmed;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9998;
`;
