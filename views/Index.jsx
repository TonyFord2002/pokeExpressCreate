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
    <title>Document</title>
</head>
              <body style={{backgroundColor: 'gold'}}>
                    <div>
                    <h1 style = {{color:'blue'}}>See all the Pokemon!</h1>
                    <nav>
                        <a href="/pokemon/new">Create a new Pokemon!</a>
                    </nav>
                    <ul>
                          {pokemon.map((poke, i) => {
                            const pokename = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
                              return (
                                  <li>
                                      <a style = {{color:'#FF0000', fontSize: '20px'}} href={`/pokemon/${poke.id}`}>
                                          {pokename}
                                      </a>{' '}
                                      <br />
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                   
                </div>
                </body>
     </html>
          )}}
module.exports = Index

