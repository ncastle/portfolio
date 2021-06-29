import React, { useEffect, useState } from 'react';

const List = () => {
  // state hooks
  const [ list, setList ] = useState([]);

  // retrieves list of items from express app
  const getList = async () => {
    const listRes = await fetch('api/getList');
    const list = await listRes.json();
    return list;
  };

  // useEffect to get the list of items from api
  useEffect(() => {
    const getListJson = async () => {
      const listJson = await getList();
      setList(listJson);
    };
    getListJson();
  }, []);

  return (
    <div className='App'>
      <h1>List of Items</h1>
      {/* Check to see if any items are found */}
      {list.length ? (
        <div>
          {/* Render list of items */}
          {list.map((item) => {
            return(
              <div key={item}> {item} </div>
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

} // end class

export default List;
