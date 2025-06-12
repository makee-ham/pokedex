import { useState } from "react";
import styled from "styled-components";

const FlipImageContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${(props) =>
    props.flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

// 부모에 relative, 자식에 absolute는 두 이미지 겹치도록 하기 위해 줌
const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`;

// y축 기준으로 180도 회전- 미리 회전 시켜놓기
const BackImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <FlipImageContainer flipped={flipped ? "flip" : ""}>
        <FrontImage src={front} />
        <BackImage src={back} />
      </FlipImageContainer>
      <button type="button" onClick={() => setFlipped((prev) => !prev)}>
        뒤집기
      </button>
    </>
  );
}
