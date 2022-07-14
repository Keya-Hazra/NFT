import ImageContainer from '../../components/ui/ImageContainer'

function Sponsored() {
  return (
    <div className="flex flex-col items-center justify-between space-y-12 lg:space-y-0 lg:flex-row">
      <ImageContainer src="/image/sponsored/Binance.svg" alt="Binance logo" className="object-scale-down xs:object-fill" />
      <ImageContainer src="/image/sponsored/Ethereum.svg" alt="Ethereum logo" className="object-scale-down xs:object-fill" />
      <ImageContainer src="/image/sponsored/Blockchain.svg" alt="Blockchain logo" className="object-scale-down xs:object-fill" />
    </div>
  )
}

export default Sponsored
