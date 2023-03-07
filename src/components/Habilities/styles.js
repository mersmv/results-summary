import styled from 'styled-components';

const StyledHabilities = styled.div`
	width: 100%;
	height: 50px;
	background-color: ${({ bgcolor }) => bgcolor};
	color: ${({ color }) => color};
	border-radius: 15px;
	display: flex;
	align-items: center;
	padding: 5px;
	margin-bottom: 10px;
	margin-left: auto;
	margin-right: auto;
	justify-content: space-between;
`;

const StyledIcon = styled.img`
	width: 30px;
	height: 30px;
	padding: 5px;
`;

const StyledTotal = styled.p`
	opacity: 0.5;
`;

const StyledCont = styled.div`
	display: flex;
	align-items: center;
`;
export { StyledHabilities, StyledIcon, StyledTotal, StyledCont };
