import React from 'react';
import ProTypes from 'prop-types'

function Food({name, picture, rating}) {
  return (
    <div>
      <h1>엄({name})</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>

  );
}

const foodILike = [
{
  id: 1,
  name: '김치',
  image : 'http://www.realkimchi.com/shopimages/realkimchi/001001000001.jpg?1496886866',
  rating: 5,
},
{
 id:2,
 name: '삼겹살',
 image : 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
 rating: 4.9,
}
];



function App() {
  
  return (
    <div>
      <h1>성법</h1>
      {foodILike.map( dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))
    </div>
  );
}


Food.proTypes ={
  name:ProTypes.string.isRequired,
  picture:ProTypes.string.isRequired,
  rating:ProTypes.number.isRequired,
}





export default App;
