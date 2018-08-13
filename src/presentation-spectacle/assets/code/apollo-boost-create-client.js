import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost/wordcamp2018/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <ul style={MenuStyle}>
              <li style={LiStyle}>
                <Link to="/" style={AStyle}>Home</Link>
              </li>
              <li style={LiStyle}>
                <Link to="/posts" style={AStyle}>Posts</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home}/>
            {/*<Route path="/dogs" component={Dogs}/>*/}
            <Route path="/posts" component={Posts}/>
            <Route path="/posts/:postId" component={SinglePost}/>
            {/*<Route path="/posts" component={Posts}/>*/}

          </div>
        </Router>
      </ApolloProvider>  
    );
  }
}