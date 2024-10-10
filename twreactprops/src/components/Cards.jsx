import React from 'react'

function Cards({username='user',imgsr="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"}) {
    let imgs=imgsr
  return (
    <div className="relative h-[400px] w-[300px] rounded-md m-5 object-center">
      <img
        src={imgs}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          The fastest learner and a dedicated programmer ... Dattebayo!!
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
  )
}

export default Cards