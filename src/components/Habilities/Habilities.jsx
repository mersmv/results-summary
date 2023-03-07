import {
	StyledCont,
	StyledHabilities,
	StyledIcon,
	StyledTotal
} from './styles';

const Habilities = ({ icon, title, percent, color, bgcolor }) => {
	return (
		<StyledHabilities color={color} bgcolor={bgcolor}>
			<StyledCont>
				<StyledIcon src={icon} alt='' />
				<p>{title}</p>
			</StyledCont>
			<StyledCont>
				<p>{percent}</p>
				<StyledTotal>/ 100</StyledTotal>
			</StyledCont>
		</StyledHabilities>
	);
};

export default Habilities;
