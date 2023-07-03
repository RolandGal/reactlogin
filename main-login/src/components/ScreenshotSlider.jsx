import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function ScreenshotSlider({ screenshots, trailer }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <div className='slider-container'>
      <Slider {...sliderSettings}>
        {trailer && (
          <div className='slider-image-container'>
            <video src={trailer} controls className='slider-image' />
          </div>
        )}
        {screenshots.map((screenshot, index) => (
          <div key={index} className='slider-image-container'>
            <img src={screenshot} alt={`Screenshot ${index + 1}`} className='slider-image' />
          </div>
        ))}
      </Slider>
    </div>
  )
        }