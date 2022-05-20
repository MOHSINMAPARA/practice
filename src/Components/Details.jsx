import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Button } from 'antd'
import "./Details.css"
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Redux/actions/counterAction'


function Details() {
  
  const count = useSelector(state => state.counterXYZ.count)
  const dispatch = useDispatch()


  const { productId } = useParams()


  const [image, setImage] = useState({})
  const [title, setTitle] = useState({})
  const [price, setPrice] = useState({})
  const [description, setDescription] = useState({})
  const [category, setCategory] = useState({})
  const [rating, setRating] = useState({})
  const [ratedCount, setRatedCount] = useState({})


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        // console.log(res.data)
        setImage(res.data.image)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
        setCategory(res.data.category)
        setRating(res.data.rating.rate)
        setRatedCount(res.data.rating.count)
      })
      .catch(err => alert(err))
  })

  return (
    <div className='Details'>

      <div className='containerOne'>
        <div className='img'>
          <img style={{ height: "21rem" }} src={`${image}`} alt="no"/>
        </div>
     

        <div className='content' style={{ height: "18rem", width: "25rem", padding: "1rem" }}>
          <h2>
            {`${title}`}
          </h2>
          <b>Description:</b>{`${description}`} <br />
          <b>Price: $ </b>    {` ${price}`} <br />
          <b>Category:</b>{`${category}`} <br />
          <b>Rating:</b>{`${rating}`} <br />
          <b> Rated Count:</b>{`${ratedCount}`} <br />
          <Button style={{ backgroundColor: "black", color: "white", marginTop: "1rem" }} onClick={() => dispatch(increment(count + 1))} block>
            Add To Cart
          </Button>
        </div>
      </div>



      <div className='containerSecond'>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={`${image} alt="no"`} />}
        >
          <h2>
            {`${title}`}
          </h2>
          <p>Description:{` ${description} `} </p>
          <p>Price: $ {` ${price}`} </p>
          <p> Category:{`${category}`} </p>
          <p> Rating:{`${rating}`} </p>
          <p> Rated Count:{`${ratedCount}`} </p>

          <Button style={{ backgroundColor: "black", color: "white", marginTop: "1rem" }} onClick={() => dispatch(increment(count + 1))} block>
            Add To Cart
          </Button>
        </Card>
      </div>

    </div>
  )
}

export default Details