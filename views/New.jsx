const React = require('react')

class New extends React.Component {
  render() {
    return( 
    <div>
        <h1>Add new Pokemon</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
          <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" /><br/>
          Link to Picture: <input type="text" name="img" /><br/>
          <input type="submit" name="" value="Create Pokemon"/>
        </form>
        </div>
  )
}
}

module.exports = New