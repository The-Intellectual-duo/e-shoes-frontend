//all you gotta do is import the component into where ever you wanna see it, but ill leave it in the about page, commented out 


import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import DotIndicator from '@mui-treasury/components/indicator/dot';
import { useArrowDarkButtonStyles } from '@mui-treasury/styles/button/arrowDark';

const data = [
	{
		id: 1,
		title: 'Nike Mag',
		subtitle: 'Back To The Future',
		image:
			// eslint-disable-next-line max-len
			'http://media.oregonlive.com/oregonian/photo/2016/10/04/-11d52533b7d765d7.jpg',
	},
	{
		id: 2,
		title: 'Air Jordan 1',
		subtitle: 'Pine Green',
		image:
			// eslint-disable-next-line max-len
			'https://images.solecollector.com/complex/images/c_crop,h_1073,w_1907,x_50,y_554/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/iglvguevn9snaed4nt5v/air-jordan-1-retro-high-og-pine-green-555088-030-pair',
	},
	{
		id: 3,
		title: 'Air Max 97',
		subtitle: 'City Special',
		image:
			// eslint-disable-next-line max-len
			'https://sneakernews.com/wp-content/uploads/2021/02/nike-air-max-97-city-special-la-DH0144-800-12.jpg?w=1140',
	},
];

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
	root: {
		// a must if you want to set arrows, indicator as absolute
		position: 'relative',
		marginTop: '23%',
		left: '50%',
		width: '35%',
	},
	slide: {
		perspective: 1000, // create perspective
		overflow: 'hidden',
		// relative is a must if you want to create overlapping layers in children
		position: 'relative',
		paddingTop: spacing(8),
		[breakpoints.up('sm')]: {
			paddingTop: spacing(10),
		},
		[breakpoints.up('md')]: {
			paddingTop: spacing(14),
		},
	},
	imageContainer: {
		display: 'block',
		position: 'relative',
		zIndex: 2,
		paddingBottom: '56.25%',
	},
	image: {
		borderRadius: '20%',
		display: 'block',
		position: 'absolute',
		zIndex: 10,
		width: '30%',
		height: '40%',
		objectFit: 'cover',
		marginLeft: '12%',
		right: '29%',
		marginTop: '17%',
		[breakpoints.up('sm')]: {
			marginLeft: '48%',
		},
	},
	arrow: {
		display: 'none',
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		[breakpoints.up('sm')]: {
			display: 'inline-flex',
		},
		backgroundColor: 'gray',
	},
	arrowLeft: {
		left: 0,
		[breakpoints.up('lg')]: {
			left: -30,
		},
	},
	arrowRight: {
		right: 0,
		[breakpoints.up('lg')]: {
			right: 65,
		},
	},
	text: {
		// shared style for text-top and text-bottom
		fontFamily: 'Broadway',
		fontWeight: 900,
		position: 'absolute',
		color: palette.common.white,
		padding: '0 8px',
		transform: 'rotateY(45deg)',
		lineHeight: 1.2,
		[breakpoints.up('sm')]: {
			padding: '0 16px',
		},
		[breakpoints.up('md')]: {
			padding: '0 24px',
		},
	},
	title: {
		top: 20,
		left: '20%',
		height: '40%',
		fontSize: 40,
		zIndex: 1,
		background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #b52212 100%)',
		[breakpoints.up('sm')]: {
			top: 40,
			fontSize: 72,
		},
		[breakpoints.up('md')]: {
			top: 52,
			fontSize: 72,
		},
	},
	subtitle: {
		top: 60,
		left: '0%',
		height: '52%',
		fontSize: 56,
		zIndex: 2,
		background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%,  #b52212  100%)',
		[breakpoints.up('sm')]: {
			top: 112,
			left: '6%',
			fontSize: 96,
		},
		[breakpoints.up('md')]: {
			top: 128,
			fontSize: 104,
		},
	},
	indicatorContainer: {
		textAlign: 'center',
	},
}));

const Carousel = () => {
	const classes = useStyles();
	const arrowStyles = useArrowDarkButtonStyles();
	const createStyle = (slideIndex, fineIndex) => {
		const diff = slideIndex - fineIndex;
		if (Math.abs(diff) > 1) return {};
		return {
			transform: `rotateY(${(-diff + 1) * 45}deg)`,
		};
	};
	// eslint-disable-next-line react/prop-types
	const renderElements = ({ index, onChangeIndex }) => (
		<>
			<Button
				className={cx(classes.arrow, classes.arrowLeft)}
				classes={arrowStyles}
				disabled={index === 0}
				onClick={() => onChangeIndex(index - 1)}>
				<KeyboardArrowLeft />
			</Button>
			<Button
				className={cx(classes.arrow, classes.arrowRight)}
				classes={arrowStyles}
				disabled={index === data.length - 1}
				onClick={() => onChangeIndex(index + 1)}>
				<KeyboardArrowRight />
			</Button>
			<div className={classes.indicatorContainer}>
				{data.map(({ id }, i) => (
					<DotIndicator
						key={id}
						active={i === index}
						onClick={() => onChangeIndex(i)}
					/>
				))}
			</div>
		</>
	);
	const renderChildren = ({ injectStyle, fineIndex }) =>
		data.map(({ id, title, subtitle, image }, i) => (
			<div key={id} className={classes.slide}>
				<Typography
					noWrap
					className={cx(classes.text, classes.title)}
					style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}>
					{title}
				</Typography>
				<Typography
					noWrap
					className={cx(classes.text, classes.subtitle)}
					style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}>
					{subtitle}
				</Typography>
				<div className={classes.imageContainer}>
					<img className={classes.image} src={image} alt={'slide'} />
				</div>
			</div>
		));
	return (
		<div className={classes.root}>
			<ParallaxSlide renderElements={renderElements}>
				{renderChildren}
			</ParallaxSlide>
		</div>
	);
};

export default Carousel;
