import React from 'react';
import styles from './ProductView.module.css';

export default function ProductView(props) {
  console.log(props)
  const data = props.location.state;

  const productData = props.getProductInfo(parseInt(props.match.params.id));

  return (
    <div>
        <button onClick={() => props.history.goBack()}>Back</button>
        <div className={ styles.product }>
          <img src={`/images/${productData.image}`} />
          <div className={ styles.infoSection }>
            <h1>{ productData.name }</h1>
            <h3>{ productData.author }</h3>
            <h2>${ productData.price }</h2>

            <div>
              <ul>
                { productData.promos.map((promo, index) => <li key={index}>{promo}</li>) }
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}