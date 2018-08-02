// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

export default class Slide1 extends React.Component {
	render(){
		return(
			<Slide transition={["zoom"]} bgImage="https://source.unsplash.com/4T5MTKMrjZg">
	          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
	             testtttttt  Boilerplate
	          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
		)
	}
}