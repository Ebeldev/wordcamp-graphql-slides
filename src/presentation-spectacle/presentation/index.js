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
  selfPortrait: require('../assets/portrait2018.jpg'),
  learnJavascript: require('../assets/learn-javascript.png'),
  traditionalCms: require('../assets/traditional-cms.png'),
  headlessWordpress: require('../assets/headless-wordpress.png'),
  headlessDecoupled: require('../assets/headless-decoupled.png'),
  graphqlLogo: require('../assets/graphql-logo.png'),
  graphVsRest: require('../assets/rest-vs-graphql.png'),
  graphVsRestWhite: require('../assets/graphql-vs-rest-white.png'),
  graphNode: require('../assets/graphql-node.jpg'),
  fastinternet: require('../assets/Mosaic-Web-Browser.png'),
  oldWordpress: require('../assets/old-wordpress.png'),
  restapi: require('../assets/rest-api.png'),
  cardUi: require('../assets/card-ui.png'),
  graphqlServer: require('../assets/graphql-server.png'),
  graphqlClient: require('../assets/graphql-client.png'),
  graphqlNode: require('../assets/graphqlnode.png'),
  internetOfThings1: require('../assets/internet-of-things-1.png'),
  internetOfThings2: require('../assets/internet-of-things-2.png'),
  internetOfThings3: require('../assets/internet-of-things-3.png'),
  createClient: require('../assets/graphql-client-create-client.png'),
  connectApp: require('../assets/graphql-client-connect-app.png'),
  importApolloProvider: require('../assets/importApolloProvider.png'),
  importIntoComponent: require('../assets/importIntoComponent.png'),
  gqlQuery: require('../assets/gql-query.png'),
  queryComponent: require('../assets/querycomponent.png'),
  victory: require('../assets/victory.jpg'),
};





// preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={400} theme={theme} progress="none" contentHeight="100vh" contentWidth="85vw" controls={false}>
        <Slide transition={["fade"]} bgColor="bgColor" bgImage={images.mainBg}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" bold={false}>Headless wordpress</Heading>
          <Text margin="10px 0 0" textColor="white" size={1} fit bold textFont="secondary">with GraphQL & ReactJS</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Image src={images.learnJavascript} />
        </Slide>
        <Slide  bgColor="bgColor">
          <Text margin="10px 0 30px" textColor="tertiary" bold textFont="secondary" textSize="40px">the goal for today</Text>
          <Text margin="10px 0 0" textColor="white"bold textFont="secondary" textSize="50px">Use Wordpress as a backend service api & use new stack to deliver the front-end</Text>
        </Slide>
        <Slide  bgColor="bgColor">
        <Layout>
          <Fill>
            <Image src={images.selfPortrait} style={ClipImage} />
          </Fill>
          <Fill>
            <Heading size={2} textColor="white" caps>Étienne Bélanger</Heading>
            <List textColor="primary" style={ListStyle}>
              <ListItem margin="0 0 20px 0">Self-taugh web developper</ListItem>
              <ListItem margin="0 0 20px 0">Been working with Wordpress for 10 years</ListItem>
              <ListItem margin="0 0 20px 0">Work @ DistrictWeb as full-stack developper</ListItem>
              <ListItem margin="0 0 20px 0" bold>Contact</ListItem>
              <ListItem margin="0 0 20px 0"><i className="far fa-envelope"></i> etienne@etiennebelanger.com</ListItem>
              <ListItem margin="0 0 20px 0"><i className="fab fa-linkedin"></i> belangeretienne</ListItem>
              <ListItem margin="0 0 20px 0"><i className="fab fa-twitter"></i> @ebeldev</ListItem>
              <ListItem margin="0 0 20px 0"><i className="fab fa-github"></i> @ebeldev</ListItem>
            </List>
          </Fill>
        </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
        <Layout>
          <Fill>
            <Image src={images.fastinternet}/>
          </Fill>
          <Fill>
            <Heading size={2} textColor="white" caps margin="0 0 40px 0">The web has changed a lot</Heading>
          </Fill>
        </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
        <Layout>
          <Fill>
            <Image src={images.oldWordpress}/>
          </Fill>
          <Fill>
            <Heading size={2} textColor="white" caps>and so did Wordpress</Heading>
          </Fill>
        </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.traditionalCms} height="80vh"/>
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
          <Image src={images.headlessDecoupled} height="80vh"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.headlessWordpress} />
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="0">
          <Layout>
            <Fill>
              <Heading size={2} textColor="white" caps>Advantages of Headless CMS</Heading>
              <List textAlign="center" textColor="primary" padding="30px" style={ListStyle}>
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
              <Text textColor="grey" textFont="secondary">/wp-json/wp/v2/</Text>
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
              <Text textColor="grey">/wp-json/wp/v2/</Text>
              <List textAlign="center" textColor="primary" padding="30px" style={ListStyle}>
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
          <List textAlign="center" textColor="primary" padding="30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="50px" padding="30px">OverFetching <Text textColor="white">a client downloads more information than is actually</Text></ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Underfetching <Text textColor="white"> a specific endpoint doesn’t provide enough of the required information</Text></ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Maintainability and Scalability<Text textColor="white">having too many endpoints </Text></ListItem>
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
          <List textAlign="center" textColor="primary" padding="30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="50px" padding="30px">Query <Text textColor="white">get data</Text></ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Mutation<Text textColor="white">modify your data</Text></ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="50px" padding="30px">Subscription <Text textColor="white">subscribe to action</Text></ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>GraphQL</Heading>
          <Text textColor="white">consist of two blocks</Text>
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
              <List textAlign="center" textColor="primary" padding="30px" style={ListStyle}>
                <Appear>
                  <ListItem textSize="40px" padding="20px">Custom
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="40px" padding="20px">Graph.cool
                    <Text textColor="white">Framework for self-hosted GraphQL server</Text>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="40px" padding="20px">WordExpress
                    <Text textColor="white">Framework to help develop Wordpress applications (server + client)</Text>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem textSize="40px" padding="20px">wp-graphql
                    <Text textColor="white">Wordpress plugin</Text>
                    <Text textColor="white" textSize="22px">https://github.com/wp-graphql/wp-graphql</Text>
                  </ListItem>
                </Appear>
              </List>
            </Fill>
            <Fill>
              <Heading size={6} textColor="white" caps padding="40px 0 0 0">Client</Heading>
              <List textAlign="center" textColor="primary" padding="30px" style={ListStyle}>
                <Appear>
                  <ListItem textSize="50px" padding="30px">Relay
                    <Text textColor="white">From Facebook, for more advance developpers</Text>
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
          <Heading size={2} textColor="white" caps>Wordpress Setup</Heading>
          <List textAlign="left" textColor="primary" padding="0 30px 30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="40px" padding="20px">Install wp-graphql plugin</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={5} textColor="white" caps>Extending Wp-Graphql plugin</Heading>
          <List textAlign="left" textColor="primary" padding="0 30px 30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="30px" padding="20px">in your theme functions.php</ListItem>
            </Appear>
            <Appear>
              <CodePane textSize="15px"
            lang="php"
            source={require('raw-loader!../assets/code/wpgraphql-extends.php')}
            margin="20px auto"
            overflow="overflow"
          />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>ReactJS Setup</Heading>
          <List textAlign="left" textColor="primary" padding="30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="40px" padding="20px">NodeJs</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="20px">In your command line</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="0 0 0 40px">npm install create-react-app -g</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="0 0 0 40px">create-react-app nameofyourproject</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="0 0 0 40px">cd into nameofproject</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="0 0 0 40px">npm install apollo-boost react-apollo graphql —-save
                <Text padding="0 0 0 40px" textColor="white">apollo-boost: Apollo-Client</Text>
                <Text padding="0 0 0 40px" textColor="white">react-apollo: View layer integration in react</Text>
                <Text padding="0 0 0 40px" textColor="white">graphql: Parses GraphQL queries</Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="0 0 0 40px">npm install react-router-dom —save</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="0 0 0 40px">yarn start</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="40px" padding="0 0 0 40px">localhost:3000</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Apollo-Boost Client Setup</Heading>
          <List textAlign="left" textColor="primary" padding="30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="40px" padding="20px">Create a client</ListItem>
            </Appear>
            <Appear>
              <Image src={images.createClient}/>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Apollo-Boost Client Setup</Heading>
          <List textAlign="left" textColor="primary" padding="30px 0 0" style={ListStyle}>
            <Appear>
              <ListItem textSize="40px" padding="20px">Connect your app with Client</ListItem>
            </Appear>
            <Appear>
              <Image src={images.importApolloProvider}/>
            </Appear>
            <Appear>
              <Image src={images.connectApp}/>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Apollo-Boost Client Setup</Heading>
          <List textAlign="left" textColor="primary" padding="30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="40px" padding="20px">In your component, import modules</ListItem>
            </Appear>
            <Appear>
              <Image src={images.importIntoComponent}/>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Apollo-Boost Client Setup</Heading>
          <List textAlign="left" textColor="primary" padding="30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="40px" padding="20px">In your component, make the query</ListItem>
            </Appear>
            <Appear>
              <Image src={images.gqlQuery}/>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Apollo-Boost Client Setup</Heading>
          <List textAlign="left" textColor="primary" padding="30px" style={ListStyle}>
            <Appear>
              <ListItem textSize="40px" padding="20px">In your component, use Query component</ListItem>
            </Appear>
            <Appear>
              <Image src={images.queryComponent}/>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor">
          <Image src={images.victory} height="80vh"/>
        </Slide> 
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Démo</Heading>
          <List textAlign="left" textColor="primary" padding="30px" style={ListStyle}>
            <ListItem textSize="40px" padding="20px">Download the slides 
              <Text textColor="white">
              https://github.com/Ebeldev/wordcamp-graphql-slides
              </Text>
            </ListItem>
            <ListItem textSize="40px" padding="20px">Download the demo
              <Text textColor="white">
              https://github.com/Ebeldev/wordcampmtl2018react
              </Text>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bgColor" padding="40px 0 0 0" align="flex-start">
          <Heading size={2} textColor="white" caps>Extra</Heading>
          <List textAlign="left" textColor="primary" padding="30px" style={ListStyle}>
            <ListItem textSize="40px" padding="20px">GraphQL + Wordpress with Jason Bahl 
              <Text textColor="white">
              https://www.youtube.com/watch?v=tYXlHb2eyQw
              </Text>
            </ListItem>
            <ListItem textSize="40px" padding="20px">GraphQL + Wordpress Learning site
              <Text textColor="white">
              https://edwincromley.gitbooks.io/wp-graphql/content/
              </Text>
            </ListItem>
            <ListItem textSize="40px" padding="20px">Apollo GraphQL 
              <Text textColor="white">apollographql.com</Text>
              </ListItem>
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

const ListStyle = {
  listStyleType: 'none',
  padding: '0 0 0 40px'
};

const ClipImage = {
  clipPath: 'polygon( 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25% )',
  height: '70vh',
};