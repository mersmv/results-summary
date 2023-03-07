import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 500px;
	height: 900px;
	background-color: white;
	margin-left: auto;
	margin-right: auto;
	margin-top: 15%;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		width: 800px;
		height: 500px;
		flex-direction: row;
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;
	}
`;

export { StyledContainer };
