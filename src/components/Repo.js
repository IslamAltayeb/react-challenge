const Repo = ({ resultRepos,repotitle }) => {
  return (
    <div className='repo-List'>      
      <h2>{resultRepos.length} repositories</h2>    
        {resultRepos && resultRepos.map(repo=>(
            <div className="repos">                
                <table>
                   <tr>
                     <th className="repo-name">Repo Name</th>
                     <th className="description">Repo Description</th>    
                   </tr>
                   <tr>
                    <td className="repo-name" key={repo.node_id}><a href={repo.html_url}target='_blank'rel="noreferrer">{repo.name} </a></td>
                    <td className="description"><p>{repo.description}</p></td>    
                   </tr>  
                 </table>
            </div>   
                     
        ))}
</div>
  )
}

export default Repo