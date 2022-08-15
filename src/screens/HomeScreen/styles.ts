import styled from "styled-components/native";
import { percents } from "../../utils/percents";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #19202a;
`;

export const Content = styled.View`
  padding: ${percents(4)};

  flex: 1;
  justify-content: space-between;
  flex-direction: ${(props) => (props.theme.isLandscape ? "row" : "column")};
`;

export const ScoreBoxLeft = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;

  border-radius: 15px;
  border: 1px solid #fc227d;
  background-color: #212832;
  position: relative;
`;

export const ScoreBoxRight = styled(ScoreBoxLeft)`
  margin-top: ${(props) => (props.theme.isLandscape ? "0px" : percents(4))};
  margin-left: ${(props) => (props.theme.isLandscape ? percents(4) : "0px")};
  border: 1px solid #02b1ff;
`;
