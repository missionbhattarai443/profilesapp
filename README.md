# Mission Bhattarai — AWS profile application

Source prepared for the CSCE 3420 Build a Web Application assignment. Follows the current AWS tutorial linked by Canvas: https://docs.aws.amazon.com/hands-on/latest/build-web-app-s3-lambda-api-gateway-dynamodb/build-web-app-s3-lambda-api-gateway-dynamodb.html

## Behavior

The React interface displays Mission Bhattarai above the Amplify Authenticator. An email signup and verification triggers Lambda to create an owner-restricted UserProfile in DynamoDB through AppSync. The signed-in profile screen retrieves that record through the GraphQL API, displays the saved email, and offers refresh and sign-out.

## Setup

Requires Node.js 22.15+ or a compatible newer LTS, npm, and an AWS session authorized to deploy Amplify backends.

1. Run `npm install`.
2. Run `npx ampx sandbox --identifier mission-task5 --once` to deploy the backend and generate `amplify_outputs.json`. Deployment creates AWS resources and IAM service permissions; review authorization and costs first.
3. Run `npm run dev` for local viewing, or `npm run build` for the production frontend.
4. Create an account in the interface using your email, verify the emailed code, and sign in. Enter your own password yourself.
5. Verify that the saved email appears, then capture the browser with Mission Bhattarai visible.

For Git-based Amplify hosting, connect this source in GitHub and use an Amplify backend deployment build configuration. The existing personal website is a separate project.

## Current status

Backend deployment and a real email signup were completed. The signed-in app retrieved the saved profile successfully. Live app: https://main.d3rg03l0r7ec2q.amplifyapp.com . The student will capture and submit the required browser screenshot.
