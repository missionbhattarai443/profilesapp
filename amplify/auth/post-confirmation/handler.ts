import type { PostConfirmationTriggerHandler } from 'aws-lambda';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { getAmplifyDataClientConfig } from '@aws-amplify/backend/function/runtime';
import { env } from '$amplify/env/post-confirmation';
import type { Schema } from '../../data/resource';

const config = await getAmplifyDataClientConfig(env);
Amplify.configure(config.resourceConfig, config.libraryOptions);
const profiles = generateClient<Schema>();

export const handler: PostConfirmationTriggerHandler = async (event) => {
  if (event.triggerSource !== 'PostConfirmation_ConfirmSignUp') return event;
  const result = await profiles.models.UserProfile.create({
    email: event.request.userAttributes.email,
    profileOwner: `${event.request.userAttributes.sub}::${event.userName}`,
  });
  if (result.errors?.length) throw new Error('Could not save the confirmed user profile.');
  return event;
};
