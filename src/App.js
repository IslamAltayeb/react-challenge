import { useState } from 'react';
import axios from 'axios'
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Repo from './components/Repo';
import Footer from './components/Footer';

const App =() => {
  const [inpt, setInpt] = useState('');
  const [repotitle, setRepotitle] = useState('');
  const [warning, setWarning] = useState('');
  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [location, setLocation] = useState();
  const [resultInfo, setResultInfo] = useState([]);
  const [resultRepos, setResultRepos] = useState([]);
  const clientId = 'f30f7ae4b828dca370fc';
  const clientSecret = '0b0c8cb22734dda71967f97cb53327d23768190d';

  const userOnclick = (e) => {
    e.preventDefault();
    inpt === '' ? setWarning(`write git-gub username, for example matrixmaster`)
      : axios
          .get(
            `https://api.github.com/users/${inpt}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`
          )
          .then(res => {
            setResultInfo(res.data);
            setFullName('FULL-NAME:');
            setUserName('USER_NAME:');
            setLocation('Location:');
          })
          .catch((err) => {
            console.log('err', err);
          });
    axios
      .get(
        `https://api.github.com/users/${inpt}/repos?client_id=${clientId}&client_secret=${clientSecret}&sort=created&sort=created`
      )
      .then(repos => {
        setResultRepos(repos.data);
        setRepotitle('All Repositories');
      })
      .catch((err) => console.log(err));
  };

  const userOntype = (x) => {
    setInpt(x.target.value);
    setWarning('');
  };

  return (
    <div className="App">
      <Header />
      <UserInfo
        userOnclick={userOnclick}
        warning={warning}
        inpt={inpt}
        resultInfo={resultInfo}
        userOntype={userOntype}
        fullName={fullName}
        userName={userName}
        location={location}
      />
      <Repo resultRepos={resultRepos} repotitle={repotitle} />

      <Footer />
    </div>
  );
}

export default App;
