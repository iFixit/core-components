import React from 'react';
import styled from 'styled-components';
import { color, borderRadius, space, fontSize } from '@core-ds/primitives';

export interface ButtonProps {
   size: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonProps>`
   padding: ${space[2]} ${space[3]};
   font-family: inherit;
   font-size: ${fontSize[1]};
   color: ${color.white};
   background-color: ${color.blue};
   border: 0;
   border-radius: ${borderRadius.md};
`;

function Button(props: React.ComponentProps<typeof StyledButton>) {
   return <StyledButton {...props} />;
}

Button.defaultProps = {
   size: 'medium',
};

export default Button;
