import { useCallback, useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import { useAuthenticator, Button } from '@aws-amplify/ui-react';

const client = generateClient({ authMode: 'userPool' });

export default function App() {
  const { signOut } = useAuthenticator();
  const [profiles, setProfiles] = useState([]);
  const [state, setState] = useState('loading');
  const load = useCallback(async () => {
    setState('loading');
    try {
      const response = await client.models.UserProfile.list();
      if (response.errors?.length) throw new Error('Profile request failed');
      setProfiles(response.data);
      setState('ready');
    } catch { setState('error'); }
  }, []);
  useEffect(() => { load(); }, [load]);
  return <main>
    <p className="eyebrow">TASK 5 · USER PROFILE</p><h2>My Profile</h2>
    {state === 'loading' && <p role="status">Loading your saved profile…</p>}
    {state === 'error' && <p role="alert">Unable to retrieve your profile. Please try again.</p>}
    {state === 'ready' && profiles.length === 0 && <p>No saved profile found. Try refreshing in a moment.</p>}
    {state === 'ready' && profiles.map(profile => <section className="profile" key={profile.id}>
      <span className="badge">Signed in</span><h3>{profile.email}</h3>
      <p>Your verified email was saved by the post-confirmation Lambda function and retrieved from DynamoDB through the GraphQL API.</p>
    </section>)}
    <div className="actions"><Button onClick={load} isDisabled={state === 'loading'}>Refresh profile</Button><Button onClick={signOut}>Sign out</Button></div>
  </main>;
}
