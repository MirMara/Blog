import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  type: "light",
  color: "white",
  subtitle: "#ffa7c4",
  description: "white",
  cardBackground: "#282c35",
};

const darkTheme = {
  type: "dark",
  color: "black",
  subtitle: "#d23669",
  cardBackground: "white",
};

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
   margin-bottom: 2.625rem;
 `;

const ButtonWrapper = styled.div`
display: inline-block;
`;


const Container = styled.div`
  margin: auto;
  height: 100%;
  padding: 0;
  background-color: ${(props) => props.theme.cardBackground};
`;

const Main = styled.div`
max-width: 42rem;
margin: 0 auto;
padding: 2.625rem 1.3125rem;
`;

const ProfileImage = styled.img`
  max-width: 100%;
  height: 80px;
  margin-left: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  border-radius: 50%;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.color};
  font-family: Montserrat Alternates", sans-serif;
  font-weight: 900;
  font-size: 14px;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 20px;
`;

const Date = styled.span`
  color: ${({ theme }) => theme.color};
  font-weight: bold;
  font-size: 20px;
  text-align: left;
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.subtitle};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 20px;

`;

const Description = styled.p`
  color: ${({ theme }) => theme.description};
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  text-align: left;
`;

const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.color};
  
  width: 50px;
  height: 22px;
  border-radius: 40%;
  background-color: #fafafa;
  box-sizing: border-box;
`;

function App() {
  const [theme, setTheme] = useState("🌙");
  const themeToggler = () => {
    theme === "🌙" ? setTheme("☀️") : setTheme("🌙");
  };

  return (
      
    <ThemeProvider theme={theme === "🌙" ? lightTheme : darkTheme}>

      <Container>
      <Main>
        <Header>
          <Title>
            <h1>Overreacted</h1>
          </Title>
         <ButtonWrapper>
          <Button onClick={themeToggler}>{theme}</Button>
         </ButtonWrapper>

        </Header>

        <ProfileImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg" />
       
        <div>


          <SubTitle> npm audit: Broken by Design </SubTitle>
          <Date>July 7, 2021 • ☕️☕️☕️ 14 min read</Date>
          <Description>
            Found 99 vulnerabilities (84 moderately irrelevant, 15 highly
            irrelevant)
          </Description>

          <SubTitle>Before You memo( )</SubTitle>
          <Date>February 23, 2021 • ☕️ 5 min read </Date>
          <Description>
            Rendering optimizations that come naturally.
          </Description>

          <SubTitle>The WET Codebase</SubTitle>
          <Date>July 13, 2020 • ☕️ 1 min read</Date>
          <Description>Come waste your time with me.</Description>

          <SubTitle>Goodbye, Clean Code</SubTitle>
          <Date>January 11, 2020 • ☕️ 5 min read </Date>
          <Description>Let clean code guide you. Then let it go.</Description>

          <SubTitle>My Decade in Review</SubTitle>
          <Date>January 1, 2020 • ☕️☕️☕️☕️☕️ 26 min read</Date>
          <Description>A personal reflection.</Description>

          <SubTitle>What Are the React Team Principles?</SubTitle>
          <Date>December 25, 2019 • ☕️ 5 min read </Date>
          <Description>UI Before API.</Description>

          <SubTitle>On let vs const</SubTitle>
          <Date>December 22, 2019 • ☕️ 3 min read</Date>
          <Description>So which one should I use?</Description>

          <SubTitle>What Is JavaScript Made Of?</SubTitle>
          <Date>December 20, 2019 • ☕️☕️☕️ 13 min read</Date>
          <Description>Getting a closure on JavaScript.</Description>

          <SubTitle>How Does the Development Mode Work?</SubTitle>
          <Date>August 4, 2019 • ☕️☕️ 10 min read</Date>
          <Description>Dead code elimination by convention.</Description>
          
        </div>
        </Main>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
