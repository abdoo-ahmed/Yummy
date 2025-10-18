import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const LoadingScreen = () => {
  return <React.Fragment>

    <section className="h-screen flex justify-center items-center">
        <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="white"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </section>

  </React.Fragment>
}

export default LoadingScreen