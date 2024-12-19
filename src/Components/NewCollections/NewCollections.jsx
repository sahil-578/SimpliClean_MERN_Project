import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products/newcollections')
    .then((response) => response.json())
    .then((data) => 
    {
      // Sort the data based on id or any timestamp
      const sortedData = data.sort((a, b) => b.id - a.id);
      // Get the last 4 items
      const lastFourItems = sortedData.slice(0, 4);
      setNew_Collection(lastFourItems);
    }
    )
  }, [])

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i) => {
                return <Item key ={i} id= {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections