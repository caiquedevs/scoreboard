import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Text, Header } from "../../components";
import { Container, Content, ScoreBoxLeft, ScoreBoxRight } from "./styles";

interface IProps {}

export default function HomeScreen(props: IProps) {
  const [scoreLeft, setScoreLeft] = useState(0);
  const [scoreRight, setScoreRight] = useState(0);

  const handlePressIncrementLeft = () => {
    setScoreLeft((old) => old + 1);
  };

  const handlePressIncrementRight = () => {
    setScoreRight((old) => old + 1);
  };

  const handlePressReset = () => {
    setScoreLeft(0);
    setScoreRight(0);
  };

  const headerContent = {
    title: "Scoreboard",
    titleColor: "#ffffff",
    background: "#212832",
    btnLeft: {
      onPress: () => {},
      icon: null,
    },
    btnRight: {
      onPress: handlePressReset,
      icon: <Ionicons name="ios-refresh-outline" size={24} color="#ffffff" />,
    },
  };

  return (
    <Container>
      <Header content={headerContent} />
      <Content>
        <ScoreBoxLeft onPress={handlePressIncrementLeft} activeOpacity={0.5}>
          <Text
            size={5.5}
            font="ArchivoMedium"
            transform="uppercase"
            color="#FC227D"
            style={{
              position: "absolute",
              top: -20,
              backgroundColor: "#212832",
            }}
          >
            Team A
          </Text>
          <Text size={25} align="center" color="#FC227D" font="BungeeShade">
            {scoreLeft}
          </Text>
        </ScoreBoxLeft>

        <ScoreBoxRight onPress={handlePressIncrementRight} activeOpacity={0.5}>
          <Text size={25} align="center" color="#02B1FF" font="BungeeShade">
            {scoreRight}
          </Text>

          <Text
            size={5.5}
            font="ArchivoMedium"
            transform="uppercase"
            color="#02B1FF"
            style={{
              position: "absolute",
              bottom: -20,
              backgroundColor: "#212832",
            }}
          >
            Team B
          </Text>
        </ScoreBoxRight>
      </Content>
    </Container>
  );
}
