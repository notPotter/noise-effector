import styled from "styled-components";

import { motion } from "framer-motion";
import { ThumbnailSourceForm } from "../components/thumbnailSource/ThumbnailSourceForm";
import { RandomPolaroids } from "../components/thumbnailSource/RandomPolaroids";
import { Styles } from "../styles/Styles";

export const ThumbnailSourceAttach = () => {
  return (
    <S.Container>
      <RandomPolaroids />
      <motion.div
        drag
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <ThumbnailSourceForm />
      </motion.div>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FlexCenter}
    ${Styles.FullWidthAndHeight}
    flex-direction: column;
    background-color: ${(props) => props.theme.BACKGROUND};
  `,

  Title: styled.h1`
    font-size: 20px;
    font-weight: 700;
  `,
};
