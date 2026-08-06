export default function Home() {


  const categories = [

    "🥛 Organic Agro Hub",

    "👕 Apparel",

    "🍰 Bakery",

    "🎁 Gift Items",

    "🏠 Home Decor",

    "💻 Electronics",

    "✨ Lifestyle"

  ];



  return (

    <main>


      {/* Hero Section */}

      <section>


        <h1>
          Nimontron
        </h1>


        <h2>
          Save More Join Nimontron
        </h2>


        <p>
          Save your Time, Effort & Money
        </p>


        <p>
          From Farm Fresh to Customized Lifestyle,
          Everything You Need in One Place.
        </p>


        <button>
          Join Now
        </button>


      </section>





      {/* Organic Agro Hub */}

      <section>


        <h2>
          Organic Agro Hub
        </h2>


        <p>
          Fresh milk from our own farm.
          Trusted quality delivered to your door.
        </p>


        <button>
          Explore Fresh Products
        </button>


      </section>





      {/* Categories */}

      <section>


        <h2>
          Our Categories
        </h2>


        <div>


          {
            categories.map((item,index)=>(

              <div key={index}>

                {item}

              </div>

            ))
          }


        </div>


      </section>





      {/* Product Placeholder */}

      <section>


        <h2>
          Featured Products
        </h2>


        <p>
          Products will appear here from Nimontron API.
        </p>


      </section>



    </main>

  );

}
