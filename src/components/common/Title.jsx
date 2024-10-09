import {PropTypes} from 'prop-types'

const Title = ({titleText}) => {
    return (
        <div className='title flex items-center'>
            <div className='dot-shape'></div>
            <h3>{titleText}</h3>
        </div>
    )
}

export default Title

Title.propTypes = {
    titleText: PropTypes.string,
}