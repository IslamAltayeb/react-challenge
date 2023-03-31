// import Search from "./Search"
const UserInfo = ({ resultInfo, userOnclick, userOntype, warning, fullName, userName, location }) => {
  return (
    <div className='userInp'>
     <form className='search'>
        <input type="text" placeholder="search for github user" name='inpt'  onChange={userOntype}/>
        <button onClick={userOnclick} type="submit" className="btn btn-info">search</button>        
    </form>

    <p className='warning'>{warning}</p>

    <div className='user-info'>
        <div className="avatar">
        <img src= {resultInfo.avatar_url} alt={resultInfo.login}/>
        </div>
        <div className="info">
        <h3>{fullName} <span>{resultInfo.name}</span></h3>
        <h4>{userName} <span>{resultInfo.login}</span></h4>
        <h4>{location} <span>{resultInfo.location}</span></h4>                
        <h4> <span>{resultInfo.bio}</span></h4>  
        </div>              
    </div>
</div>
  )
}

export default UserInfo