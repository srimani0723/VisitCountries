import Card from '../Card'
import {
  Box,
  Heading,
  List,
  Item,
  CountryName,
  VisitBtn,
  AddedList,
  Para,
  Para2,
  EmptyView,
} from './styledcomponents'

const VisitCountries = props => {
  const {list, remove, visit} = props
  const visitedCountries = list.filter(each => each.isVisited === true)
  const onRemoveCard = id => {
    remove(id)
  }

  const onVisitCard = id => {
    visit(id)
  }

  return (
    <Box>
      <Heading>Countries</Heading>
      <List>
        {list.map(each => {
          const {id, name, isVisited} = each

          const onAdd = () => {
            onVisitCard(id)
          }

          return (
            <Item key={id}>
              <CountryName>{name}</CountryName>
              {isVisited ? (
                <Para2>Visited</Para2>
              ) : (
                <VisitBtn type="button" onClick={onAdd}>
                  Visit
                </VisitBtn>
              )}
            </Item>
          )
        })}
      </List>
      <Heading>Visited Countries</Heading>

      {visitedCountries.length === 0 ? (
        <EmptyView>
          <Para>No Countries Visited Yet!</Para>
        </EmptyView>
      ) : (
        <AddedList>
          {visitedCountries.map(each => (
            <Card key={each.id} item={each} onRemoveCard={onRemoveCard} />
          ))}
        </AddedList>
      )}
    </Box>
  )
}

export default VisitCountries
