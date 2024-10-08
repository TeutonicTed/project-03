import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm';
import SearchForm from '../components/SearchForm';

import { useUserContext } from '../providers/UserProvider';


export default function Home() {

  const { userData } = useUserContext();
  // logic for which component is showing

  return (
    <>
      <h2 className="site-bio">Wanna cook healthy meals?</h2>
      <br />
      <h5 >Sign up below to create your <span className="site-text">free account</span> with access to <u>hundreds</u> of <u>recipes</u>.</h5>
      <h5>Because <i>Everyone Eats</i>... Why not eat well?!</h5>
      <hr style={{ color: 'white', margin: '10px'}} />
      <div className="container-fluid col-12">
        <div className="row">
          <div className="col-6 login">
            <LoginForm />
          </div>
          <div className="col-6 signup">
            <SignupForm />
          </div>
        </div>
      </div>
    </>
  );
};