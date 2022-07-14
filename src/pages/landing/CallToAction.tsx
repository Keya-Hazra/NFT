function CallToAction() {
  return (
    <div className="flex flex-col justify-center py-20 space-y-6 text-white transition delay-150 rounded-lg group ring-offset-2 bg-gradient-to-bl from-primaryLight to-primaryDark hover:bg-gradient-to-tr ">
      <h3 className="text-3xl font-bold text-center">
        Get ready to collect
        <br />
        our NFT

      </h3>
      <div className="flex justify-center">
        <button
          type="button"
          className="px-4 py-2 text-white transition delay-200 rounded-lg bg-white/40 hover:bg-white hover:text-primaryLight whitespace-nowrap"
        >
          <p className="group-hover:animate-pulse">
            Get Started
          </p>
        </button>
      </div>
    </div>
  )
}

export default CallToAction
