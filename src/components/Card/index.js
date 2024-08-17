import {Item, Layout, Image, RemoveBtn, CountryName} from './styledcomponents'

const Card = props => {
  const {item, onRemoveCard} = props
  const {id, imageUrl, name} = item

  const removeCard = () => {
    onRemoveCard(id)
  }

  return (
    <Item>
      <Image src={imageUrl} alt="thumbnail" />
      <Layout>
        <CountryName>{name}</CountryName>
        <RemoveBtn type="button" onClick={removeCard}>
          Remove
        </RemoveBtn>
      </Layout>
    </Item>
  )
}

export default Card
