 import  Colors from 'open-props/src/colors'
 
 import styled from 'styled-components'

const Tester = styled.div`
  padding: 3rem;
  background-color: ${Colors['--red-4']};
`;

export default function Home() {
 
 console.log(Colors['--gray-4'] )
  return (
     <header style={{backgroundColor:Colors['--gray-5'], textAlign:"center"}}>
      <h1>Using Open Props</h1>
      <Tester>James Foley</Tester>
     </header>
  )
}
