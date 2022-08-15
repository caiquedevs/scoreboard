import styled from "styled-components/native";
import { percents } from "../../utils/percents";

interface IProps {
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;

  size: 1 | 2 | 2.5 | 3 | 4 | 5.5 | 25;
  font: "BungeeShade" | "ArchivoMedium";
  color: string;
  align?: "center" | "left" | "right";
  transform?: "uppercase" | "none" | "lowercase" | "capitalize";
}

export const Text = styled.Text<IProps>`
  padding-top: ${(props) => props.pt || "0px"};
  padding-right: ${(props) => props.pr || "0px"};
  padding-bottom: ${(props) => props.pb || "0px"};
  padding-left: ${(props) => props.pl || "0px"};

  margin-top: ${(props) => props.mt || "0px"};
  margin-right: ${(props) => props.mr || "0px"};
  margin-bottom: ${(props) => props.mb || "0px"};
  margin-left: ${(props) => props.ml || "0px"};

  font-family: ${(props) => props.font};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align || "left"};
  text-transform: ${(props) => props.transform || "lowercase"};
  font-size: ${(props) => {
    console.log(`[TEXT_SIZE] ${props.size} = ${percents(props.size)}`);
    return percents(props.size);
  }};
`;
