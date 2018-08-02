// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Interactive,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Icon,
  Layout,
  Fit,
  Fill,
  Quote,
  Slide,
  Text,
  Notes,
  Image, 
  SlideSet,
} from "spectacle";

// import preloader from 'utils/preloader';

// Import theme
import createTheme from "spectacle/lib/themes/default";

import styled, { injectGlobal }  from 'react-emotion';

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "#E10098",
  secondary: "#1F2022",
  // tertiary: "#03A9FC",
  tertiary: "#1F61A0",
  quarternary: "#CECECE",
  bgColor: "#171e26"
}, {
  // primary: "Alfa Slab One",
  primary: {
      // name: "Alfa Slab One",
      name: "Palanquin Dark",
      googleFont: true,
      styles: ['600']
    },
  secondary: {
      name: "Quattrocento Sans",
      googleFont: true,
      styles: ['400','400i']
    }
});

const images = {
  mainBg: require('../assets/background-blocks.png'),
  learnJavascript: require('../assets/learn-javascript.png'),
  headlessWordpress: require('../assets/headless-wordpress.png'),
  graphqlLogo: require('../assets/graphql-logo.png'),
  // graphVsRest: require('../assets/graphql-vs-rest.png'),
  graphVsRest: require('../assets/rest-vs-graphql.png'),
  graphVsRestWhite: require('../assets/graphql-vs-rest-white.png'),
  graphNode: require('../assets/graphql-node.jpg'),
  fastinternet: require('../assets/fast-internet.jpg'),
  restapi: require('../assets/rest-api.png'),
  cardUi: require('../assets/card-ui.png'),
  graphqlServer: require('../assets/graphql-server.png'),
  graphqlClient: require('../assets/graphql-client.png'),
  graphqlNode: require('../assets/graphqlnode.png'),
  internetOfThings1: require('../assets/internet-of-things-1.png'),
  internetOfThings2: require('../assets/internet-of-things-2.png'),
  internetOfThings3: require('../assets/internet-of-things-3.png'),
  victory: require('../assets/victory.jpg'),
};





// preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={400} theme={theme} progress="none" contentHeight="100vh" contentWidth="85vw" controls={false}>
        <Slide transition={["fade"]} bgColor="bgColor" bgImage={images.mainBg}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" bold={false}>Headless wordpress</Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold textFont="secondary">with GraphQL & ReactJS</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Image src={images.learnJavascript} height="900px"/>
        </Slide>
        <Slide  bgColor="bgColor">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold textFont="secondary">the goal for today</Text>
        </Slide>
        <Slide  bgColor="bgColor">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold textFont="secondary">who im i</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" bgImage={images.fastinternet}>
          <Text margin="10px 0 0" textColor="black" size={1} fit bold textFont="secondary">Deliver fast the content</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.internetOfThings1} height="80vh"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.internetOfThings2} height="80vh"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.internetOfThings3} height="80vh"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.headlessWordpress} />
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Layout>
            <Fill>
              <Heading size={2} textColor="white" caps>Advantages of Headless CMS</Heading>
              <List textAlign="center" textColor="primary" padding="30px">
                <Appear>
                  <ListItem textSize="50px" padding="30px">separate content and presentation</ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">generate unique user experiences</ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">make your content available to mobile apps, kiosk, VR experiences, and other mediums</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0" >
          <Layout>
            <Fill style={divStyle}>
              <Heading size={2} textColor="white" caps>Rest Api</Heading>
              <Text textColor="grey" textFont="secondary">/wp-json/v2/</Text>
            </Fill>
            <Fill>
              <Image src={images.restapi} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Layout>
            <Fill>
              <Image src={images.cardUi} />
              <Text textColor="grey" textSize="10px" padding="40px 0 0 0">https://www.behance.net/gallery/61219781/MI-MUSIC-Free-Website-PSD-Template</Text>
            </Fill>
            <Fill>
              <Heading size={2} textColor="white" caps>Rest Api</Heading>
              <Text textColor="grey">/wp-json/v2/</Text>
              <List textAlign="center" textColor="primary" padding="30px">
                <Appear>
                  <ListItem textSize="50px" padding="30px">/posts</ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">/media/"id"</ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">/users/"id"</ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">/categories/"id"</ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Heading size={2} textColor="white" caps>Rest Api</Heading>
          <Text textColor="white">desavantages</Text>
          <List textAlign="center" textColor="primary" padding="30px">
            <Appear>
              <ListItem textSize="50px" padding="30px">OverFetching = a client downloads more information than is actually</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Underfetching = a specific endpoint doesn’t provide enough of the required information</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Maintainability</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Image src={images.graphqlLogo}/>
          <Text textColor="white" textSize="50px" padding="40px 0 0 0">A query language for your API</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Image src={images.graphVsRest} />
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Heading size={2} textColor="white" caps>GraphQL</Heading>
          <Text textColor="white" textSize="50px" padding="40px 0 0 0">Type of operations you can do on your api</Text>
          <List textAlign="center" textColor="primary" padding="30px">
            <Appear>
              <ListItem textSize="50px" padding="30px">Query = get data</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Mutation = modify your data</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Subscription = subscribe to action</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>GraphQL</Heading>
          <Text textColor="white">consist of two core concepts</Text>
          <Layout>
            <Fill>
              <Heading size={6} textColor="white" caps padding="40px 0 0 0">Server</Heading>
              <Appear>
                <Text textColor="white">Responsible for the schema of your api and the resolves the data</Text>
              </Appear>
              <Appear>
                <Image src={images.graphqlServer} />
              </Appear>
            </Fill>
            <Fill>
              <Heading size={6} textColor="white" caps padding="40px 0 0 0">Client</Heading>
              <Appear>
              <Text textColor="white">Responsible for making the query to the server</Text>
              </Appear>
              <Appear>
                <Image src={images.graphqlClient} />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>GraphQL</Heading>
          <Text textColor="white">options</Text>
          <Layout>
            <Fill>
              <Heading size={6} textColor="white" caps padding="40px 0 0 0">Server</Heading>
              <List textAlign="center" textColor="primary" padding="30px">
                <Appear>
                  <ListItem textSize="50px" padding="30px">Custom
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">Graph.cool
                    <Text textColor="white">Framework for self-hosted GraphQL server</Text>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">WordExpress
                    <Text textColor="white">Framework to help develop Wordpress applications (server + client)</Text>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">wp-graphql
                    <Text textColor="white">Wordpress plugin</Text>
                    <Text textColor="white" textSize="22px">https://github.com/wp-graphql/wp-graphql</Text>
                  </ListItem>
                </Appear>
              </List>
            </Fill>
            <Fill>
              <Heading size={6} textColor="white" caps padding="40px 0 0 0">Client</Heading>
              <List textAlign="center" textColor="primary" padding="30px">
                <Appear>
                  <ListItem textSize="50px" padding="30px">Relay
                    <Text textColor="white">From Facebook, for more advance</Text>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="50px" padding="30px">Apollo-client
                    <Text textColor="white">Apollo-boost = no setup, cache, manage local and server data</Text>
                  </ListItem>
                </Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.graphqlNode} height="80vh"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>ReactJS Setup</Heading>
          <List textAlign="left" textColor="primary" padding="30px">
            <Appear>
              <ListItem textSize="40px" padding="20px">NodeJs</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="20px">npm install create-react-app -g nameofproject</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="20px">cd into nameofproject</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="20px">npm install apollo-boost react-apollo graphql —-save
                <Text textColor="white">apollo-boost: Apollo-Client</Text>
                <Text textColor="white">react-apollo: View layer integration in react</Text>
                <Text textColor="white">graphql: Parses GraphQL queries</Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="20px">npm install react-router-dom —save</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="20px">yarn start</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="20px">localhost:3000</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.victory} height="80vh"/>
        </Slide> 
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Extra</Heading>
          <List textAlign="left" textColor="primary" padding="30px">
            <ListItem textSize="40px" padding="20px">GraphQL + Wordpress : https://www.youtube.com/watch?v=tYXlHb2eyQw</ListItem>
            <ListItem textSize="40px" padding="20px">Apollo GraphQL : https://www.apollographql.com/</ListItem>
          </List>
        </Slide>       
      </Deck>
    );
  }
}

const divStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const startStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
};