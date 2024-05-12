import { NEWS_INFOS } from "../../../constants/info";
import * as S from "./New.style";
import News from "./News/News";
import { motion } from "framer-motion";
import theme from "../../../theme";

const New = () => {
  return (
    <S.Container>
      <motion.div
        initial={{ color: "#fff" }}
        whileInView={{ color: `${theme.COLOR.PRIMARY}` }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
      >
        <h1>최근 소식</h1>
      </motion.div>

      <S.Wrapper>
        {NEWS_INFOS.map((news) => (
          <News key={news.id} news={news} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default New;
