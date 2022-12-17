import ButtonText from 'components/Buttons/ButtonText';
import { CTALoader } from 'components/CTA/CTALoader';
import { Text } from 'styles';
const App = () => {
  return (
    <>
      {' '}
      <ButtonText
        onClick={() => console.log('button clicked!')}
        color="#201547"
        hoverColor="#4C4581">
        <Text.Small textAlign="right">Button Text</Text.Small>
      </ButtonText>
      <Text.Small textAlign="left">Small Text</Text.Small>
      <CTALoader />
    </>
  );
};

export default App;
