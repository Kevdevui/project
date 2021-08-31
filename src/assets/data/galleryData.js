import { v4 as uuidv4 } from 'uuid';

import JewelsImg from '../images/jewels.jpg';
import RopeImg from '../images/rope.jpg';
import PrimateImg from '../images/primate.jpg';
import BlogImg from '../images/blog.jpg';
import CityImg from '../images/city.jpg';
import FoodImg from '../images/food.jpg';
import LoveImg from '../images/love.jpg';
import PinkImg from '../images/pink.jpg';
import RiverImg from '../images/river.jpg';
import FlowerImg from '../images/flower.jpg';
import PondImg from '../images/pond.jpg';
import TaxiImg from '../images/nighttaxi.jpg';

// in this section hold the data for the images, infomation and the image names, along witht the links the all the images.

const galleryData = [
  {
    id: uuidv4(),
    name: 'Jewels Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: JewelsImg,
  },
  {
    id: uuidv4(),
    name: 'Rope Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: RopeImg,
  },
  {
    id: uuidv4(),
    name: 'Primate Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: PrimateImg,
  },
  {
    id: uuidv4(),
    name: 'Blog Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: BlogImg,
  },
  {
    id: uuidv4(),
    name: 'City Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: CityImg,
  },
  {
    id: uuidv4(),
    name: 'Food Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: FoodImg,
  },
  {
    id: uuidv4(),
    name: 'Love Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: LoveImg,
  },
  {
    id: uuidv4(),
    name: 'Pink Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: PinkImg,
  },
  {
    id: uuidv4(),
    name: 'River Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: RiverImg,
  },
  {
    id: uuidv4(),
    name: 'Flower Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: FlowerImg,
  },
  {
    id: uuidv4(),
    name: 'Pond Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: PondImg,
  },
  {
    id: uuidv4(),
    name: 'Night Taxi Img',
    desc:
      'Pellentesque nec nam aliquam sem et tortor consequat id. Diam sit amet nisl suscipit adipiscing bibendum. In metus vulputate eu scelerisque',
    img: TaxiImg,
  },
];

export default galleryData;
