import styled from "styled-components";
import { Container } from "./globalStyle";


export const Cont = styled(Container)`
  @media screen and (max-width: 768px){

     padding:  0 15px;

  }
 


`
export const Hstyle = styled.h1`

       font-size: clamp(2rem, 3vw, 3.5rem);

   @media screen and (max-width: 768px)
   {
       font-size: clamp(1.3rem, 2.5vw, 3.5rem);

   }


`