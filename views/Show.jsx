
const React = require('react')

    class Show extends React.Component {
      render() {
        const { pokemon } = this.props
        const pokename = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        if(pokemon.name == 'bulbasaur' || pokemon.name == 'ivysaur' || pokemon.name == 'venusaur'){
          return (
            <html lang="en">
            <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
                </head>
                    <body style = {{backgroundColor: 'lightgreen'}}>
                      <div>
                        <h1><img style = {{height:'185px'}}src = 'https://i0.wp.com/twobeardgaming.com/wp-content/uploads/2020/05/pokemon-gotta.png?fit=1200400&ssl=1'></img></h1>
                        <h2 style = {{color: 'green'}}>{pokename}</h2>
                        <img src = {`${pokemon.img}.jpg`}></img>
                        <br></br><div style={{display:'inline-flex'}}><form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                        <input style={{backgroundColor:'red', color:'white',borderRadius:'20px'}} type="submit" value="Delete"/>
                        </form>
                        <form action={`/pokemon/${pokemon._id}/edit?_method=EDIT`} method="PUT">
                        <input style={{backgroundColor:'blue', color:'white', borderRadius:'20px'}} type="submit" value="Edit"/>
                        </form></div>
                        <button style = {{backgroundColor:'green', color: 'white', borderRadius: '20px'}}><a style ={{color:'white'}} href = '/pokemon'>Back to list</a></button>
                      </div>
                      </body>
            </html>
                   )}else if(pokemon.name == 'charmander' || pokemon.name == 'charizard' || pokemon.name == 'charmeleon'){
                       return(
                    <body style = {{backgroundColor: 'sandybrown'}}>
                      <div>
                        <h1><img style = {{height:'185px'}}src = 'https://i0.wp.com/twobeardgaming.com/wp-content/uploads/2020/05/pokemon-gotta.png?fit=1200400&ssl=1'></img></h1>
                        <h2 style = {{color: 'red'}}>{pokename}</h2>
                        <img src = {`${pokemon.img}.jpg`}></img>
                        <br></br>
                        <div style={{display:'inline-flex'}}><form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                        <input style={{backgroundColor:'red', color:'white',borderRadius:'20px'}} type="submit" value="Delete"/>
                        </form>
                        <form action={`/pokemon/${pokemon._id}/edit?_method=EDIT`} method="PUT">
                        <input style={{backgroundColor:'blue', color:'white', borderRadius:'20px'}} type="submit" value="Edit"/>
                        </form></div>
                        <button style = {{backgroundColor:'green', color: 'white', borderRadius: '20px'}}><a style ={{color:'white'}} href = '/pokemon'>Back to list</a></button>
                      </div>
                    </body>
                     )}else if(pokemon.name == 'squirtle' || pokemon.name =='wartortle' || pokemon.name =='blastoise'){
                         return(
                    <body style = {{backgroundColor: 'cornflowerblue'}}>
                      <div>
                        <h1><img style = {{height:'185px'}}src = 'https://i0.wp.com/twobeardgaming.com/wp-content/uploads/2020/05/pokemon-gotta.png?fit=1200400&ssl=1'></img></h1>
                        <h2 style = {{color: 'blue'}}>{pokename}</h2>
                        <img src = {`${pokemon.img}.jpg`}></img>
                        <br></br>
                        
                        <div style={{display:'inline-flex'}}><form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                        <input style={{backgroundColor:'red', color:'white',borderRadius:'20px'}} type="submit" value="Delete"/>
                        </form>
                        <form action={`/pokemon/${pokemon._id}/edit?_method=EDIT`} method="PUT">
                        <input style={{backgroundColor:'blue', color:'white', borderRadius:'20px'}} type="submit" value="Edit"/>
                        </form></div>
                        <button style = {{backgroundColor:'green', color: 'white', borderRadius: '20px'}}><a style ={{color:'white'}} href = '/pokemon'>Back to list</a></button>
                      </div>
                    </body>)
                     }else{
                      return(
                        <body style = {{backgroundColor: 'gold'}}>
                          <div>
                            <h1><img style = {{height:'185px'}}src = 'https://i0.wp.com/twobeardgaming.com/wp-content/uploads/2020/05/pokemon-gotta.png?fit=1200400&ssl=1'></img></h1>
                            <h2 style = {{color: 'blue'}}>{pokename}</h2>
                            <img src = {`${pokemon.img}`}></img>
                            <br></br> 
                            <div style={{display:'inline-flex'}}><form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                                        <input style={{backgroundColor:'red', color:'white',borderRadius:'20px'}} type="submit" value="Delete"/>
                                        </form>
                                        <form action={`/pokemon/${pokemon._id}/edit?_method=EDIT`} method="PUT">
                                        <input style={{backgroundColor:'blue', color:'white', borderRadius:'20px'}} type="submit" value="Edit"/>
                                        </form></div>

                            <button style = {{backgroundColor:'green', color: 'white', borderRadius: '20px'}}><a style ={{color:'white'}} href = '/pokemon'>Back to list</a></button>
                          </div>
                        </body>)
                     }
                }
            }
            module.exports = Show