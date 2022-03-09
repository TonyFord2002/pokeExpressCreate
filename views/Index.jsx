const React = require('react');


    class Index extends React.Component {
      render() {
          //destructering same as pokemon = this.props.pokemon
          const { pokemon } = this.props
          return (
<html lang="en">
<head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>All Pokemon</title>
</head>
            <body style={{backgroundColor: 'gold'}}>
                <div>
                    <h1 style = {{color:'blue'}}>See all the Pokemon!</h1>
                    <nav>
                        <h2 ><a style = {{color:'blue'}} href="/pokemon/new">Create a new Pokemon!</a></h2>
                    </nav>
                    <ul>
                          {pokemon.map((poke, i) => {
                            const pokename = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
                              return (
                                  <li key= {i}>
                                      <div><a style = {{color:'#FF0000', fontSize: '30px'}} href={`/pokemon/${poke.id}`}>
                                          {pokename}
                                      </a>{' '}</div>
                                        <div style={{display:'inline-flex'}}><form action={`/pokemon/${poke._id}?_method=DELETE`} method="POST">
                                        <input style={{backgroundColor:'red', color:'white',borderRadius:'20px'}} type="submit" value="Delete"/>
                                        </form>
                                        <form action={`/pokemon/${poke._id}/edit?_method=EDIT`} method="PUT">
                                        <input style={{backgroundColor:'blue', color:'white', borderRadius:'20px'}} type="submit" value="Edit"/>
                                        </form></div>
                                     <br/> <br />
                                  </li>
                              )
                          })}
                      </ul>
                </div>
            </body>
</html>
          )}}
module.exports = Index

