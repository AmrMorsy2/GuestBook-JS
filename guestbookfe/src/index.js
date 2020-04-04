import React from "react";
import 'antd/dist/antd.css';
import { ApolloProvider } from 'react-apollo';
import  ApolloClient  from 'apollo-client';
import { HttpLink  } from 'apollo-link-http';
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ReactDOM from 'react-dom';
import Routes from './route'

const client = new ApolloClient({
    link: createHttpLink({ uri: "localhost:3000/graphql" }),
    cache: new InMemoryCache()
});

const App = () => (
    <ApolloProvider client={client}>
        <Routes/>
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));