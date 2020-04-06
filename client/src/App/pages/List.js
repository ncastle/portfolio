import React from 'react';

class List extends React.Component {
  // Init state
  constructor(props){
    super(props);
    this.state = {
      list: []
    }
  }

  // Fetch list on first mount
  componentDidMount() {
    this.getList();
  }

  // retrieves list of items from express app
  getList = () => {
    fetch('api/getList')
    .then(res => res.json())
    .then(list => this.setState({list}))
  }

  render() {
    const { list } = this.state;

    return (
      <div className='App'>
        <h1>List of Items</h1>
        {/* Check to see if any items are found */}
        {list.length ? (
          <div>
            {/* Render list of items */}
            {list.map((item) => {
              return(
                <div> {item} </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  } // end render

} // end class

export default List;
