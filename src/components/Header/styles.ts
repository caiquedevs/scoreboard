import styled from "styled-components/native";

import { RFPercentage } from "react-native-responsive-fontsize";

interface IProps {
  bg: string | null;
}

export const SafeAreaView = styled.SafeAreaView<IProps>`
  width: 100%;
  background-color: ${({ theme, bg }: any) => theme[bg] || bg};
`;

export const Container = styled.View<IProps>`
  width: 100%;
  height: ${RFPercentage(7.6) + "px"};
  padding: 0 ${RFPercentage(2) + "px"};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, bg }: any) => theme[bg] || bg};
`;
