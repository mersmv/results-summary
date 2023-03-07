import { CARDS_INFO } from '../../constants/card-info';
import Habilities from '../Habilities/Habilities';
import {
	StyledButton,
	StyledHabilitesCont,
	StyledSummaryCont,
	StyledTitle
} from './styles';

const Summary = () => {
	return (
		<StyledSummaryCont>
			<StyledTitle>Summary</StyledTitle>
			<StyledHabilitesCont>
				{CARDS_INFO.map(card => (
					<Habilities key={card.id} {...card} />
				))}
			</StyledHabilitesCont>
			<StyledButton>Continue</StyledButton>
		</StyledSummaryCont>
	);
};

export default Summary;
