import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'antd';
import './Home.css'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { products } from '../Redux/actions/productAction';



function Home() {
  const dispatch = useDispatch()

  const { Meta } = Card;
  const [productsss, setProduct] = useState([])

  dispatch(prod(productsss))

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => alert(err))
    }, [])
    
    
    
    
    return (
      <div className='Home'>
      {
        products.map((product, index) => {
          return (
            <div >
              <Card
                hoverable
                style={{ width: "230px", height: "330px" }}
                cover={<img alt="example" src={product.image} style={{ height: "200px" }} />}
              >
                <Meta style={{ marginBottom: "1rem" }} title={<b>{product.title}</b>} description={` $ ${product.price}`} />
                <Link key={product.id} className='detailsButton' products={products} to={`/Details/${product.id}`}>Details</Link>
              </Card>
              <br />
            </div>

          )

        })
      }



    </div>
  )
}

export default Home
