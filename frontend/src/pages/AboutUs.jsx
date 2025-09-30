import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const products = [
    {
      title: "Mens's Clothing",
      img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Women's Clothing",
      img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Jewelery",
      img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Electronics",
      img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="aboutus-page container my-5">
      {/* Hero Section */}
      <section className="aboutus-hero text-center mb-5">
        <h1 id="products_heading">About BuzzMart</h1>
        <p className="lead">
          Welcome to BuzzMart, your one-stop online marketplace for quality products at unbeatable prices. 
          We are committed to bringing you a diverse selection of items, ranging from stylish jewelry and 
          premium beauty products to innovative tech gadgets designed to simplify and enhance your daily life.
        At BuzzMart, we believe shopping should be seamless, enjoyable, and trustworthy. Our platform is designed
         with you in mind, providing easy navigation, secure payment options, and fast delivery, so you can focus on
          discovering products that inspire and excite you.
        </p>
        <div className="aboutus-buttons my-3">
          <button id="view_btn"><Link to="/aboutus" style={{ textDecoration: "none", color: "inherit" }}>Browse Products</Link></button>
         <button id="view_btn" style={{ backgroundColor: "#59ce8f", border: "none", padding: "10px 20px", borderRadius: "5px" }}><Link to="/register" style={{ textDecoration: "none", color: "white" }}>Sign Up</Link></button>

        </div>
      </section>

      {/* Our Products */}
      <section className="aboutus-products mb-5">
        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src={product.img}
                  alt={product.title}
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{product.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="aboutus-mission mb-5 row text-center">
        <div className="col-md-6 mb-3">
          <div className="card p-3">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              To make everyday shopping a joy by offering curated products, transparent pricing and exceptional customer support.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card p-3">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              To become the most-loved online store for thoughtful shoppers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
     <section className="aboutus-team mb-5 text-center">
  <h3 className="card-title mb-4">Meet the Team</h3>
  <div className="team-grid row justify-content-center">
    {[
      { 
        name: "Tharuk Shan Ji", 
        role: "Founder & CEO",
        image: "https://i.imgur.com/sHZNWUI.png"
      },
      { 
        name: "Walter White", 
        role: "Head of Operations",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6sRHH71zgT4M_pBEUpk293VZA21wbW839gabXXQAQAhoJ6vf14cqVENVljppP2xIlSQ&usqp=CAU"
      },
      { 
        name: "Billy Butcher", 
        role: "Tech Lead",
        image: "https://www.slashfilm.com/img/gallery/the-12-best-billy-butcher-moments-on-the-boys/l-intro-1660230334.jpg"
      }
    ].map((member, index) => (
      <div key={index} className="col-md-3 col-sm-6 mb-3">
        <div 
          className="card team-member p-4 shadow-sm border-0 h-100"
          style={{
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
          }}
        >
          <div className="avatar mb-3">
            <img 
              src={member.image} 
              alt={member.name} 
              className="img-fluid rounded-circle shadow-sm"
              style={{ 
                width: "130px", 
                height: "130px", 
                objectFit: "cover",
                border: "4px solid black"
              }} 
            />
          </div>
          <h4 className="mb-1">{member.name}</h4>
          <p className="text-muted">{member.role}</p>
          {/* Example social icons */}
          <div>
            <a href="#" className="mx-2 text-dark"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="mx-2 text-dark"><i className="fab fa-github"></i></a>
            <a href="#" className="mx-2 text-dark"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default AboutPage;
