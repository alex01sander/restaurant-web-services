import styled from "styled-components/native"

interface ContainerProps {
  disabled?: boolean;
}




export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${({ disabled }) => (disabled ? "#999" : "#D73035")};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`

