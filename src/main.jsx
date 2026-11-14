import React from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './index.css';
import outputs from '../amplify_outputs.json';
import App from './App.jsx';

Amplify.configure(outputs);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header><p>CSCE 3420 · Build a Web Application</p><h1>Mission Bhattarai</h1></header>
    <Authenticator><App /></Authenticator>
    <footer>AWS Amplify · Amazon Cognito · AWS Lambda · AppSync · DynamoDB</footer>
  </React.StrictMode>
);
