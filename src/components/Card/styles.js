import styled from 'styled-components';

const StyledCard = styled.div`
	width: 100%;
	height: 55%;
	background-image: linear-gradient(165deg, #6943ff 30%, #2f2ce9 100%);
	border-end-end-radius: 20px;
	border-end-start-radius: 20px;

	@media screen and (min-width: 768px) {
		border-radius: 20px;
		width: 50%;
		height: 100%;
	}
`;

const StyledResultTitle = styled.h1`
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	color: white;
	font-size: 1.5rem;
	opacity: 0.5;
	padding: 20px;
`;

const StyledCircle = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	background-image: linear-gradient(#4d21c9, transparent);
	margin-left: auto;
	margin-right: auto;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledResultNumber = styled.h1`
	font-size: 3rem;
	margin: 0;
	color: white;
`;

const StyledSubResultText = styled.h2`
	font-size: 1rem;
	margin: 0;
	opacity: 0.5;
	color: white;
`;

const StyledState = styled.h1`
	font-size: 2rem;
	color: white;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`;

const StyledStateText = styled.p`
	margin-left: auto;
	width: 60%;
	line-height: 25px;
	font-size: 1.1rem;
	margin-right: auto;
	text-align: center;
	opacity: 0.5;
	color: white;
`;

export {
	StyledCard,
	StyledResultTitle,
	StyledCircle,
	StyledResultNumber,
	StyledSubResultText,
	StyledState,
	StyledStateText
};
