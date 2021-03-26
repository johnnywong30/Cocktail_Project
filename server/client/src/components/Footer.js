import PropTypes from 'prop-types';

const Footer = ({author, date}) => {
    return (
        <div>
            <footer className="footer">
            <p>
                By {author} &ensp; &copy; {date}
                
            </p>
            </footer>
        </div>
    )
}

Footer.defaultProps = {
    author: 'Johnny Wong',
    date: 'March 2021',
}

Footer.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default Footer
