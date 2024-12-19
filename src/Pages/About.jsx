import React from 'react'
import './CSS/About.css'
import about_img from '../Components/Assets/about-img.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-container">
          <h1>ABOUT US</h1>
          <hr />
          
          <div className="image-container">
            <img src={about_img} alt="" />
          </div>
          
          <div className="content-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio, laudantium molestias voluptatum sapiente quasi minus repudiandae ipsam vero alias repellendus odit totam officiis eos facilis velit adipisci consequatur aspernatur?
              Harum tempora at aliquid praesentium molestias ex nihil numquam cupiditate minima? Alias aut quos quod consectetur quis? Eligendi voluptate eveniet vitae expedita, cum distinctio praesentium, ullam aperiam nihil doloribus nemo.
              Quia, laboriosam sequi exercitationem necessitatibus repellendus nobis nihil recusandae impedit rerum quasi dolores culpa vel, dignissimos provident doloremque illo laborum sint corrupti aliquid velit iure. Officiis non laborum culpa sequi?
              Optio harum, eos neque sunt quam incidunt obcaecati natus dignissimos ullam totam iste? Amet, atque corporis ut voluptatibus laudantium modi beatae totam optio? Incidunt eveniet nisi doloribus ipsam, quibusdam libero!
              Quod vitae animi adipisci nostrum a quam esse quasi voluptatum labore nemo eos perferendis voluptas facilis quas exercitationem, at, omnis explicabo, hic molestias qui et. Quos dolorem aspernatur possimus provident?
            </p>

            <p>
              Voluptatum amet veritatis voluptate deleniti quae cupiditate iusto numquam. Hic nisi deserunt praesentium sint quod commodi temporibus nesciunt assumenda maxime quisquam aperiam, voluptates in totam eaque inventore laudantium voluptas voluptatum.
              Animi nesciunt ea voluptatibus quod modi quos mollitia beatae. Rem modi nemo dolorem enim laudantium ipsa iste facilis quos rerum quasi a, nihil perspiciatis eaque pariatur commodi inventore maiores ad.
              In adipisci, magnam cum facilis impedit provident. Tempora earum distinctio quae consequuntur dolor repellat quos provident ipsa, molestiae id itaque, modi magnam nihil consequatur odit deleniti impedit voluptas tempore iste!
              Delectus dignissimos beatae facilis. Unde, quis corporis. Accusantium magni voluptate modi repellat doloribus animi aperiam sint distinctio, similique laborum omnis, placeat harum eaque molestias eveniet. Quia est eaque obcaecati odit?
              Deserunt cupiditate voluptatem illum laborum nostrum, autem porro a vel fuga temporibus nobis rem magnam quidem! Earum tempore vitae assumenda iste sequi amet nemo qui deserunt possimus, ipsam error nulla!
            
            </p>

          </div>
        </div>
      </div>
  )
}

export default About