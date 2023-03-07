import styled from 'styled-components';

const StyledTitle = styled.h1`
	text-align: start;
	margin-left: 30px;
`;

const StyledSummaryCont = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	@media screen and (min-width: 768px) {
		width: 50%;
	}
`;

const StyledButton = styled.button`
	width: 80%;
	height: 60px;
	background-image: linear-gradient(165deg, #6943ff 30%, #2f2ce9 100%);
	border-radius: 30px;
	border: solid transparent 1px;
	color: white;
	font-size: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

const StyledHabilitesCont = styled.div`
	width: 80%;
`;

export { StyledTitle, StyledSummaryCont, StyledButton, StyledHabilitesCont };
