import React from 'react'
import ItemLayout from './itemLayout'


const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
        <ItemLayout className={' col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
          <h2 className='text-xl md:text-2xl text-left w-full capitalize text-accent'>
            🌟 About Us:
          </h2>
          <p className='font-light text-xs sm:text-sm md:text-base'>
            We are a community of passionate artists, creators, and art enthusiasts dedicated to sharing and celebrating the beauty of creativity. Whether you&apos;re an aspiring artist, a seasoned professional, or simply someone who appreciates art in all its forms, you&apos;ve found your creative haven here!
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            12+ <br /> <sub className='font-semibold text-base'>Collaborators</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            49 <br /> <sub className='font-semibold text-base'>Page Views</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full lg:col-span-12 flex-col items-start !p-5 "}>
          <h2 className='text-2xl text-left w-full capitalize text-accent'>
            What We Offer
          </h2>
          <p className='font-light'>
            🔹Inspiring Artwork: Explore a diverse range of artwork spanning various mediums, styles, and themes. From stunning paintings and intricate illustrations to captivating photography and digital art, there&apos;s something for everyone to enjoy!<br />
            🔹Creative Community: Join our vibrant community of artists and art lovers from around the globe. Share your work, connect with like-minded individuals, and engage in lively discussions about all things art-related.<br />
            🔹Artistic Resources: Access helpful resources, tips, and tutorials to enhance your artistic skills and unleash your creative potential. Whether you&apos;re looking to learn new techniques, find inspiration, or hone your craft, we&apos;ve got you covered!
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full lg:col-span-12 flex-col !p-5"}>
          <h2 className="text-2xl text-left w-full capitalize text-accent">
            🖌️ Our Mission:
          </h2>
          <p className='font-light'>
            At The Artistry Glimpse, our mission is to inspire, uplift, and connect individuals through the transformative power of art. We believe art transcends boundaries, evokes deep emotions, and sparks meaningful conversations. Our platform celebrates this potential, providing a vibrant space where creativity flourishes and connections are forged.

            We are committed to fostering a supportive and inclusive environment for artists of all backgrounds and skill levels. Whether you&apos;re an emerging artist, a seasoned professional, or an art enthusiast, you&apos;ll find your place here.

            Our platform offers artists a stage to showcase their talent and share their unique perspectives with a global audience. We believe in the power of collaboration, creating opportunities for artists to connect, share ideas, and inspire each other. We aim to nurture creativity, celebrate innovation, and value artistic expression.

            The Artistry Glimpse is also a catalyst for positive change. We promote art that challenges perceptions, addresses important issues, and inspires action. We support artists who use their work to make a difference.

            Beyond showcasing art, we provide resources such as tutorials, tips, and inspirational content to help artists develop their skills and unlock their creative potential. We believe in lifelong learning and offer the tools and support needed for artistic growth.

            Join us at The Artistry Glimpse and be part of our thriving community. Let&apos;s create, connect, and inspire together. Celebrate the beauty of art and the endless possibilities it offers. Let&apos;s make a positive impact through creativity. Welcome to The Artistry Glimpse!
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-12 flex-col !p-5"}>
          <h2 className='text-2xl text-left w-full capitalize text-accent'>
            📣 Stay Connected:
          </h2>
          <p className='font-light'>
            Ready to embark on a journey of artistic discovery? Follow us to stay updated on the latest artwork, community events, and creative endeavors. Don&apos;t forget to tag us in your posts and use our official hashtag #TheArtistryGlimpse for a chance to be featured!
          </p>
        </ItemLayout>
      </div>
      
    </section>
  )
}

export default AboutDetails
