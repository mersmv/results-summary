import Card from './components/Card/Card';
import Summary from './components/Summary/Summary';
import { StyledContainer } from './components/Container/styles';

const App = () => {
	return (
		<StyledContainer>
			<Card />
			<Summary />
		</StyledContainer>
	);
};

export default App;
