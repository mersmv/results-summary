import {
	StyledCard,
	StyledCircle,
	StyledResultNumber,
	StyledResultTitle,
	StyledState,
	StyledStateText,
	StyledSubResultText
} from './styles';

const Card = () => {
	return (
		<StyledCard>
			<StyledResultTitle>Your Result</StyledResultTitle>
			<StyledCircle>
				<StyledResultNumber>76</StyledResultNumber>
				<StyledSubResultText>of 100</StyledSubResultText>
			</StyledCircle>
			<StyledState>Great</StyledState>
			<StyledStateText>
				Your performance exceed 65% of the people conducing test here!
			</StyledStateText>
		</StyledCard>
	);
};

export default Card;
