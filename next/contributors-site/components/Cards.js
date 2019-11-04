const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    marginTop: 100,
    gap: 40
};

const imgStyle = {
    height: 250,
    width: 282
};
const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed'
};
const iconStyle = {
    height: 40,
    width: 40,
    margin: 'auto'
};

import { FaTwitter, FaGithub } from 'react-icons/fa';
import Contributors from '../static/contributors.json';

const Cards = () => (
    <div style={listStyle}>
        {Contributors.map((contributor, index) => {
            return (
                <div style={cardStyle}>
                    <img style={imgStyle} src="placeholder.png"></img>
                    <h1 key={index}>
                        {contributor.name}
                        <div>
                            <a
                                style={iconStyle}
                                href={contributor.github}
                                target="_blank"
                            >
                                <FaGithub color="#211F1F" />
                            </a>
                            <a
                                style={iconStyle}
                                href={contributor.twitter}
                                target="_blank"
                            >
                                <FaTwitter color="#00acee" />
                            </a>
                        </div>
                    </h1>
                </div>
            );
        })}
    </div>
);

export default Cards;
